const sharp = require('sharp')
const path = require('path')

async function main() {
  const svgOverlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#000000"/>
  <g transform="translate(50,400) scale(0.07,-0.07)" fill="#ffffff">
    <path d="M981 4805 c-190 -53 -355 -235 -391 -430 -8 -42 -10 -453 -8 -1399 l3 -1339 55 66 c55 66 315 343 715 762 246 257 287 319 310 470 3 22 6 351 7 730 1 613 -1 696 -16 748 -27 96 -67 168 -135 240 -53 56 -82 77 -160 115 -94 46 -96 46 -211 49 -80 2 -131 -2 -169 -12z"/>
    <path d="M4010 4806 c-54 -15 -143 -59 -187 -93 -17 -13 -121 -120 -230 -236 -109 -116 -247 -264 -308 -327 -60 -64 -166 -176 -234 -250 -68 -74 -152 -164 -186 -200 -34 -36 -171 -182 -305 -325 -134 -143 -287 -305 -340 -360 -91 -95 -286 -304 -347 -372 -40 -45 -577 -615 -708 -753 -280 -293 -437 -460 -466 -496 -79 -98 -125 -252 -116 -388 25 -391 432 -628 787 -459 100 48 91 39 935 944 105 112 249 264 321 339 72 74 275 288 450 475 175 187 414 442 530 565 116 124 289 308 384 410 199 212 301 320 486 510 136 140 175 197 208 308 89 303 -91 629 -391 707 -68 18 -220 18 -283 1z"/>
    <path d="M3423 2195 c-113 -31 -228 -107 -295 -196 -152 -202 -156 -487 -11 -668 35 -44 281 -298 578 -597 149 -151 204 -188 322 -220 75 -20 212 -19 287 1 177 47 324 197 380 384 20 69 21 218 1 294 -17 67 -67 169 -103 212 -84 101 -675 692 -725 725 -85 57 -168 80 -286 79 -53 0 -120 -7 -148 -14z"/>
  </g>
  <text x="150" y="480" font-family="'IBM Plex Mono', monospace" font-size="64" font-weight="700" fill="#ffffff" letter-spacing="4">KIWI DEFENCE</text>
  <text x="150" y="530" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#a0a0a0" letter-spacing="6">CYBERSECURITY</text>
</svg>`)

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 0, g: 0, b: 0 },
    },
  })
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'og-image.png'))

  console.log('og-image.png generated')
}

main().catch(console.error)
