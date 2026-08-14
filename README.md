# Kiwi Defence Website

Production Next.js site for [kiwidefence.com](https://kiwidefence.com), containerized for self-hosted deployment.

## Requirements

- Node.js 20+ (local development)
- Docker and Docker Compose (production)

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production with Docker

Build and run:

```bash
docker compose up --build -d
```

Or build the image directly:

```bash
docker build -t kiwidefence/web:latest .
docker run -d --name kiwidefence -p 3000:3000 kiwidefence/web:latest
```

Health check: `GET /api/health`

### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `SITE_URL` | `https://kiwidefence.com` | Canonical URL for metadata, sitemap, and robots |
| `PORT` | `3000` | Host port mapping in docker compose |

Copy `.env.example` to `.env` and adjust as needed:

```bash
cp .env.example .env
```

When building the image with a custom domain:

```bash
docker build --build-arg SITE_URL=https://your-domain.com -t kiwidefence/web:latest .
```

## Reverse proxy

Run the container on an internal port and terminate TLS at your reverse proxy (nginx, Caddy, Traefik, etc.).

Example nginx location block:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## Deployment notes

- Uses Next.js `standalone` output for a minimal production image.
- Static assets are cached with long-lived immutable headers.
- A one-time auto-reload handles stale JS chunks after redeploys.
- GitHub Pages hosting has been removed; deploy via Docker on your own infrastructure.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Generate OG image and build for production |
| `npm run start` | Start production server (after `npm run build`) |
| `npm run lint` | Run Next.js lint |
