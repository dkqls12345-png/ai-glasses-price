const CHECKED = "2026-11-17";
const USD_KRW = 1336.2;

const CATEGORY = {
  camera: "카메라형",
  display: "디스플레이형",
  ar: "AR 영상형",
};

const PRODUCTS = [
  {
    id: "rb-gen1",
    name: "Ray-Ban Meta (Gen 1)",
    brand: "Ray-Ban · Meta",
    category: "camera",
    status: "sale",
    statusLabel: "이전 세대 할인",
    camera: "12MP 초광각",
    display: "없음",
    ai: "Meta AI",
    weight: "약 48g",
    battery: "최대 4시간",
    usd: 224,
    usdFrom: true,
    usdWas: 299,
    krwOfficial: null,
    note: "Meta 스토어 목록의 할인 시작가입니다. 색상별로 품절이거나 리퍼 제품일 수 있습니다. Wayfarer 스탠다드 무게는 사양표를 옮긴 정리 기준입니다.",
    links: [
      { href: "https://www.meta.com/ai-glasses/shop-all/", label: "미국 Meta 스토어" },
    ],
  },
  {
    id: "adventurer",
    name: "Meta Glasses Adventurer",
    brand: "Meta",
    category: "camera",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "12MP · 최대 3K",
    display: "없음",
    ai: "Meta AI",
    weight: "53.8g",
    battery: "최대 8시간",
    usd: 249,
    usdFrom: true,
    krwOfficial: 400000,
    note: "미국 목록 시작가 249달러는 플러그인 케이스 기준입니다. 같은 날 제품 페이지의 충전 케이스 구성은 299달러로 보였습니다. 한국 공식가는 플러그인 케이스 포함 40만 원. 무게는 스탠다드 프레임입니다.",
    links: [
      { href: "https://www.meta.com/kr/ai-glasses/meta-glasses/adventurer/", label: "한국 Meta 스토어" },
      { href: "https://www.meta.com/ai-glasses/meta-glasses/adventurer/", label: "미국 Meta 스토어" },
    ],
  },
  {
    id: "rb-gen2",
    name: "Ray-Ban Meta (Gen 2)",
    brand: "Ray-Ban · Meta",
    category: "camera",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "12MP · 최대 3K",
    display: "없음",
    ai: "Meta AI",
    weight: "약 51g",
    battery: "최대 8시간",
    usd: 379,
    usdFrom: true,
    krwOfficial: 690000,
    note: "Wayfarer·Skyler·Headliner. 한국 스토어 Wayfarer 69만 원. 무게는 Wayfarer 스탠다드 사양 정리입니다. 충전 케이스가 추가 사용 시간을 제공합니다.",
    links: [
      { href: "https://www.meta.com/kr/ai-glasses/ray-ban-meta-wayfarer-gen-2/", label: "한국 Meta 스토어" },
      { href: "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-gen-2/", label: "미국 Meta 스토어" },
    ],
  },
  {
    id: "rb-gen3",
    name: "Ray-Ban Meta (Gen 3)",
    brand: "Ray-Ban · Meta",
    category: "camera",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "12MP · 최대 3K",
    display: "없음",
    ai: "Meta AI",
    weight: "51.5g",
    battery: "최대 9시간",
    usd: 449,
    usdFrom: true,
    krwOfficial: 740000,
    note: "Wayfarer·Aviator·Zena. 6개 마이크. 무게는 Wayfarer 스탠다드. 케이스로 추가 충전. IPX4는 Ray-Ban 미국 소개 페이지 기준입니다.",
    links: [
      { href: "https://www.meta.com/kr/ai-glasses/ray-ban-meta/", label: "한국 Meta 스토어" },
      { href: "https://www.meta.com/ai-glasses/ray-ban-meta/", label: "미국 Meta 스토어" },
    ],
  },
  {
    id: "hstn",
    name: "Oakley Meta HSTN",
    brand: "Oakley · Meta",
    category: "camera",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "12MP · 최대 3K",
    display: "없음",
    ai: "Meta AI",
    weight: "미확인",
    battery: "통상 최대 8시간",
    usd: 399,
    usdFrom: true,
    krwOfficial: 720000,
    note: "미국 시작가 399달러. Oakley.com의 트랜지션 렌즈 구성은 479달러로 보였습니다. 연속 재생은 최대 5시간, 통상 사용은 최대 8시간.",
    links: [
      { href: "https://www.meta.com/kr/ai-glasses/oakley-meta-hstn-glasses/", label: "한국 Meta 스토어" },
      { href: "https://www.meta.com/ai-glasses/oakley-meta-hstn-glasses/", label: "미국 Meta 스토어" },
    ],
  },
  {
    id: "vanguard",
    name: "Oakley Meta Vanguard",
    brand: "Oakley · Meta",
    category: "camera",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "12MP · 122° · 최대 3K",
    display: "없음",
    ai: "Meta AI",
    weight: "미확인",
    battery: "통상 최대 9시간",
    usd: 499,
    usdFrom: true,
    krwOfficial: 900000,
    note: "미국 Oakley.com Prizm Black 499달러, 한국 Meta 스토어 90만 원. 연속 재생 최대 6시간, 통상 사용 최대 9시간. 처방 렌즈는 없습니다.",
    links: [
      { href: "https://www.meta.com/kr/ai-glasses/oakley-meta-vanguard/", label: "한국 Meta 스토어" },
      { href: "https://www.oakley.com/en-us/product/W0OW8001", label: "미국 Oakley" },
    ],
  },
  {
    id: "gentle",
    name: "Gentle Monster Intelligent Eyewear",
    brand: "젠틀몬스터 · 삼성 · 구글",
    category: "camera",
    status: "preorder",
    statusLabel: "12월 10일 출고",
    camera: "있음",
    display: "없음",
    ai: "Gemini",
    weight: "약 41g",
    battery: "미확인",
    usd: 449,
    usdFrom: true,
    krwOfficial: 650000,
    note: "Android XR 기반. 구글 발표 시작가 449달러, 한국 공식 스토어 65만 원부터(모델별 70만 원까지). 확인 시점 프리오더는 품절이었습니다. 무게는 업체 설명을 전한 보도입니다. 배터리 시간은 찾지 못했습니다.",
    links: [
      { href: "https://www.gentlemonster.com/kr/ko/category/sunglasses/intelligent-eyewear", label: "젠틀몬스터 한국" },
      { href: "https://blog.google/innovation-and-ai/technology/xr-ar/google-intelligent-eyewear-collections-pre-order/", label: "구글 발표" },
    ],
  },
  {
    id: "warby",
    name: "Warby Parker Intelligent Eyewear",
    brand: "Warby Parker · 삼성 · 구글",
    category: "camera",
    status: "preorder",
    statusLabel: "12월 10일 출고",
    camera: "있음",
    display: "없음",
    ai: "Gemini",
    weight: "미확인",
    battery: "미확인",
    usd: 395,
    usdFrom: true,
    krwOfficial: null,
    note: "Alden·Reid·Wren. 구글 발표 시작가 395달러. 미국·캐나다 판매로 안내됐고 한국 원화 판매가는 확인하지 못했습니다. 안경 무게와 배터리 시간도 발표문에 없습니다.",
    links: [
      { href: "https://www.warbyparker.com/", label: "Warby Parker" },
      { href: "https://blog.google/innovation-and-ai/technology/xr-ar/google-intelligent-eyewear-collections-pre-order/", label: "구글 발표" },
    ],
  },
  {
    id: "xiaomi",
    name: "Xiaomi AI Glasses",
    brand: "Xiaomi",
    category: "camera",
    status: "limited",
    statusLabel: "중국 판매",
    camera: "12MP · 2K 영상",
    display: "없음",
    ai: "샤오미 AI (샤오아이)",
    weight: "40g",
    battery: "최대 8.6시간",
    usd: null,
    krwOfficial: null,
    note: "중국 본토용입니다. 샤오미 소개 글의 사양은 확인했으나, 공식 구매 화면에서 금액이 보이지 않아 달러와 원화는 미확인입니다. 미국·한국 공식 판매가도 확인하지 못했습니다.",
    links: [
      { href: "https://www.mi.com/prod/xiaomi-ai-glasses", label: "샤오미 제품 페이지" },
    ],
  },
  {
    id: "display",
    name: "Meta Ray-Ban Display",
    brand: "Ray-Ban · Meta",
    category: "display",
    status: "onsale",
    statusLabel: "미국 판매",
    camera: "12MP · 최대 3K",
    display: "600×600 풀컬러 · 오른쪽",
    ai: "Meta AI",
    weight: "68g",
    battery: "미확인",
    usd: 799,
    usdFrom: true,
    krwOfficial: null,
    note: "Neural Band 포함 시작가 799달러. 처방 렌즈를 더하면 999달러로 안내됩니다. 한국 스토어는 구매 불가로 표시돼 원화 공식가는 없습니다. 무게는 스탠다드, 라지는 70g. 배터리 지속 시간은 확인하지 못했습니다.",
    links: [
      { href: "https://www.meta.com/ai-glasses/meta-ray-ban-display-glasses-and-neural-band/", label: "미국 Meta 스토어" },
      { href: "https://www.meta.com/kr/ai-glasses/meta-ray-ban-display/", label: "한국 페이지 (구매 불가)" },
    ],
  },
  {
    id: "g2",
    name: "Even Realities G2",
    brand: "Even Realities",
    category: "display",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "없음",
    display: "녹색 MicroLED · 640×350",
    ai: "Even AI",
    weight: "36g",
    battery: "통상 최대 2일",
    usd: 599,
    usdFrom: true,
    krwOfficial: null,
    note: "A·B 프레임 모두 599달러부터. 카메라와 스피커가 없는 알림·번역용 안경입니다. 시야각 27.5°, 밝기 1,200니트. 케이스로 약 7번 추가 충전. 한국 공식 판매가는 확인하지 못했습니다.",
    links: [
      { href: "https://www.evenrealities.com/products/g2-a", label: "Even 공식 스토어" },
    ],
  },
  {
    id: "g1",
    name: "Even Realities G1",
    brand: "Even Realities",
    category: "display",
    status: "ended",
    statusLabel: "판매 종료",
    camera: "없음",
    display: "녹색 도파관",
    ai: "Even AI",
    weight: "미확인",
    battery: "미확인",
    usd: null,
    krwOfficial: null,
    note: "제품 페이지는 구매 불가를 안내합니다. 스토어 목록은 G1 A를 499달러부터, 제품 페이지는 599달러로 서로 달라 현재가는 미확인입니다.",
    links: [
      { href: "https://www.evenrealities.com/products/g1-a", label: "Even G1 페이지" },
    ],
  },
  {
    id: "halo",
    name: "Brilliant Labs Halo",
    brand: "Brilliant Labs",
    category: "display",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "저전력 광학 센서",
    display: "컬러 마이크로 디스플레이",
    ai: "Noa",
    weight: "40g 남짓",
    battery: "종일 (시간 미기재)",
    usd: 399,
    krwOfficial: null,
    note: "오픈소스. 공식 스토어 블랙 399달러. 일반 사진 카메라로 안내되지는 않습니다. 도수 조절 범위는 +2에서 -6디옵터. 한국 공식 판매가는 확인하지 못했습니다.",
    links: [
      { href: "https://brilliant.xyz/products/halo", label: "Brilliant 공식 스토어" },
    ],
  },
  {
    id: "frame",
    name: "Brilliant Labs Frame",
    brand: "Brilliant Labs",
    category: "display",
    status: "ended",
    statusLabel: "판매 종료",
    camera: "720p (출시 사양)",
    display: "컬러 마이크로 OLED",
    ai: "Noa",
    weight: "39g",
    battery: "약 6시간 (출시 사양)",
    usd: null,
    krwOfficial: null,
    note: "2024년 출시 보도가 349달러였습니다. 2026년 11월 스토어에는 Halo만 있어 현재 판매가는 미확인입니다. 사양은 출시 당시 자료입니다.",
    links: [
      { href: "https://brilliant.xyz/collections/frontpage", label: "Brilliant 스토어" },
    ],
  },
  {
    id: "rokid",
    name: "Rokid Glasses",
    brand: "Rokid",
    category: "display",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "12MP",
    display: "MicroLED · 시야 30°",
    ai: "음성 AI · 번역",
    weight: "49g",
    battery: "210mAh · 시간 미확인",
    usd: 999,
    krwOfficial: null,
    note: "미국 Rokid 스토어 정가 999달러. 최대 1,500니트, 4개 마이크. 사용 시간(시간)은 제품 사양 목록에서 확인하지 못했습니다. 한국 원화 공식가도 확인하지 못했습니다.",
    links: [
      { href: "https://store.rokid.com/products/rokid-glasses", label: "Rokid 공식 스토어" },
    ],
  },
  {
    id: "x3pro",
    name: "RayNeo X3 Pro",
    brand: "RayNeo",
    category: "display",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "12MP · 최대 4K/3K",
    display: "양안 컬러 MicroLED · 640×480",
    ai: "Gemini",
    weight: "76g",
    battery: "245mAh · 영상 약 36분",
    usd: 1299,
    krwOfficial: null,
    note: "미국 공식가 1,299달러. 녹음 최대 5시간, 음악 최대 3시간, 영상 약 36분으로 용도별 시간이 다릅니다. 완충 약 38분. 한국 공식 판매가는 확인하지 못했습니다.",
    links: [
      { href: "https://www.rayneo.com/products/x3-pro-ai-display-glasses", label: "RayNeo 공식 스토어" },
    ],
  },
  {
    id: "air4",
    name: "RayNeo Air 4 Pro",
    brand: "RayNeo",
    category: "ar",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "없음",
    display: "FHD Micro-OLED · 최대 120Hz",
    ai: "대화형 비서 없음",
    weight: "76g",
    battery: "없음 · 연결 기기 전원",
    usd: 299,
    krwOfficial: null,
    note: "가상 화면용입니다. HDR10, 최대 1,200니트, Bang & Olufsen 튜닝. 영상 업스케일과 2D→3D는 있으나 대화형 AI 비서는 없습니다.",
    links: [
      { href: "https://www.rayneo.com/products/rayneo-air-4-pro-ar-glasses", label: "RayNeo 공식 스토어" },
    ],
  },
  {
    id: "xreal-one",
    name: "XREAL One",
    brand: "XREAL",
    category: "ar",
    status: "sale",
    statusLabel: "세일",
    camera: "없음",
    display: "1080p Micro-OLED · 최대 120Hz",
    ai: "대화형 비서 없음",
    weight: "82g",
    battery: "없음 · USB-C 전원",
    usd: 399,
    usdWas: 499,
    krwOfficial: null,
    note: "X1 칩으로 화면을 공간에 고정(3DoF). 밝기 600니트, Bose 사운드. 카메라는 별매 Eye(99달러)입니다. 한국 공식 판매가는 확인하지 못했습니다.",
    links: [
      { href: "https://us.shop.xreal.com/products/xreal-one", label: "XREAL 미국 스토어" },
    ],
  },
  {
    id: "xreal-pro",
    name: "XREAL One Pro",
    brand: "XREAL",
    category: "ar",
    status: "sale",
    statusLabel: "세일",
    camera: "없음",
    display: "1080p Micro-OLED · 최대 120Hz",
    ai: "대화형 비서 없음",
    weight: "87g",
    battery: "없음 · USB-C 전원",
    usd: 599,
    usdWas: 649,
    krwOfficial: null,
    note: "One보다 밝은 700니트, 선택 IPD. 정가 649달러에서 599달러. 카메라 모듈은 별매입니다.",
    links: [
      { href: "https://us.shop.xreal.com/products/xreal-one-pro", label: "XREAL 미국 스토어" },
    ],
  },
  {
    id: "beast",
    name: "VITURE Beast",
    brand: "VITURE",
    category: "ar",
    status: "onsale",
    statusLabel: "판매 중",
    camera: "전면 RGB (공간 촬영)",
    display: "1920×1200 · 최대 120Hz",
    ai: "대화형 비서 없음",
    weight: "88g",
    battery: "없음 · USB-C 전원",
    usd: 549,
    krwOfficial: null,
    note: "시야각 58°, 체감 밝기 최대 1,250니트, 내장 3DoF, 전자 변색. 무게는 레귤러, 라지는 90g. 한국 공식 판매가는 확인하지 못했습니다.",
    links: [
      { href: "https://www.viture.com/product/viture-beast-xr-glasses", label: "VITURE 공식 스토어" },
    ],
  },
  {
    id: "aura",
    name: "XREAL AURA",
    brand: "XREAL",
    category: "ar",
    status: "sale",
    statusLabel: "연말 할인가",
    camera: "고해상도 + 트래킹",
    display: "1920×1200 · 시야 70°",
    ai: "Android XR",
    weight: "안경 95g",
    battery: "퍽 4,455mAh",
    usd: 1099,
    usdFrom: true,
    krwOfficial: null,
    note: "안경과 컴퓨팅 퍽이 한 세트입니다. 12GB+256GB가 1,099달러, 16GB+512GB가 1,299달러(연말까지, 정가 대비 할인). 퍽 무게 265g. 사용 시간(시간)은 확인하지 못했습니다.",
    links: [
      { href: "https://www.xreal.com/us/aura", label: "XREAL AURA" },
    ],
  },
];

const PICKS = [
  {
    id: "rb-gen1",
    kicker: "가장 저렴",
    reason: "공식 목록에서 확인한 가장 낮은 시작가입니다. 이전 세대라 배터리는 최대 4시간이고, 재고는 색마다 다를 수 있습니다.",
  },
  {
    id: "adventurer",
    kicker: "가성비",
    reason: "지금 세대 카메라형입니다. 한국 공식 40만 원에 12MP·3K와 Meta AI, 최대 8시간. Gen 2 한국가 69만 원보다 낮습니다.",
  },
  {
    id: "x3pro",
    kicker: "가장 프리미엄",
    reason: "이 목록에서 가장 높은 단일 판매가입니다. 양안 컬러 화면, 12MP 카메라, Gemini가 한 프레임에 있습니다.",
  },
];

const SOURCES = [
  {
    name: "Meta 스토어 미국 · 전체 목록",
    url: "https://www.meta.com/ai-glasses/shop-all/",
    used: "Gen 1 224달러(정가 299달러), Adventurer 249달러부터, Gen 2 379달러, Gen 3 449달러, Display 799달러, HSTN·Vanguard 시작가",
  },
  {
    name: "Meta 스토어 한국 · Ray-Ban Meta Gen 3",
    url: "https://www.meta.com/kr/ai-glasses/ray-ban-meta/",
    used: "Gen 3 한국 시작가 74만 원",
  },
  {
    name: "Meta 스토어 한국 · Wayfarer Gen 2",
    url: "https://www.meta.com/kr/ai-glasses/ray-ban-meta-wayfarer-gen-2/",
    used: "Gen 2 Wayfarer 69만 원",
  },
  {
    name: "Meta 스토어 한국 · Adventurer",
    url: "https://www.meta.com/kr/ai-glasses/meta-glasses/adventurer/",
    used: "플러그인 케이스 포함 40만 원",
  },
  {
    name: "Meta 스토어 한국 · Oakley HSTN",
    url: "https://www.meta.com/kr/ai-glasses/oakley-meta-hstn-glasses/",
    used: "HSTN 72만 원",
  },
  {
    name: "Meta 스토어 한국 · Oakley Vanguard",
    url: "https://www.meta.com/kr/ai-glasses/oakley-meta-vanguard/",
    used: "Vanguard 90만 원",
  },
  {
    name: "Meta 스토어 한국 · Ray-Ban Display",
    url: "https://www.meta.com/kr/ai-glasses/meta-ray-ban-display/",
    used: "한국 페이지는 구매 불가",
  },
  {
    name: "Meta Ray-Ban Display 미국 구매 페이지",
    url: "https://www.meta.com/ai-glasses/meta-ray-ban-display-glasses-and-neural-band/",
    used: "799달러. 처방 포함 999달러는 제품 소개 페이지",
  },
  {
    name: "Ray-Ban 미국 · Display 사양",
    url: "https://www.ray-ban.com/usa/l/discover-meta-ray-ban-display",
    used: "600×600 디스플레이, 스탠다드 68g",
  },
  {
    name: "Meta 도움말 · 배터리",
    url: "https://www.meta.com/help/ai-glasses/303057485648146/",
    used: "Gen 1 최대 4시간, Gen 2 최대 8시간, Gen 3 최대 9시간",
  },
  {
    name: "Meta 구매 가이드",
    url: "https://www.meta.com/ai-glasses/learn/smart-glasses-buying-guide/",
    used: "Meta Glasses 라인 12MP·3K, 최대 8시간",
  },
  {
    name: "Oakley 미국 · Vanguard",
    url: "https://www.oakley.com/en-us/product/W0OW8001",
    used: "499달러, 카메라·배터리",
  },
  {
    name: "Oakley 미국 · HSTN 예시",
    url: "https://www.oakley.com/en-us/product/W0OW8002",
    used: "트랜지션 구성 479달러, HSTN 배터리 설명",
  },
  {
    name: "구글 · Intelligent Eyewear 예약",
    url: "https://blog.google/innovation-and-ai/technology/xr-ar/google-intelligent-eyewear-collections-pre-order/",
    used: "Warby Parker 395달러부터, 젠틀몬스터 449달러부터, 12월 10일",
  },
  {
    name: "젠틀몬스터 한국 · 인텔리전트 아이웨어",
    url: "https://www.gentlemonster.com/kr/ko/category/sunglasses/intelligent-eyewear",
    used: "65만 원부터, 프리오더 품절",
  },
  {
    name: "연합뉴스 · 젠틀몬스터 무게",
    url: "https://www.yna.co.kr/view/AKR20261116167400030",
    used: "업체 설명으로 약 41g, 촬영 표시등",
  },
  {
    name: "XREAL One",
    url: "https://us.shop.xreal.com/products/xreal-one",
    used: "세일 399달러, 정가 499달러, 82g, 1080p",
  },
  {
    name: "XREAL One Pro",
    url: "https://us.shop.xreal.com/products/xreal-one-pro",
    used: "세일 599달러, 정가 649달러, 87g",
  },
  {
    name: "XREAL AURA",
    url: "https://www.xreal.com/us/aura",
    used: "1,099달러 / 1,299달러, Android XR, 95g + 퍽",
  },
  {
    name: "RayNeo X3 Pro",
    url: "https://www.rayneo.com/products/x3-pro-ai-display-glasses",
    used: "1,299달러, Gemini, 76g, 배터리",
  },
  {
    name: "RayNeo Air 4 Pro",
    url: "https://www.rayneo.com/products/rayneo-air-4-pro-ar-glasses",
    used: "299달러, 76g, 배터리 없음",
  },
  {
    name: "Rokid Glasses",
    url: "https://store.rokid.com/products/rokid-glasses",
    used: "999달러, 49g, 12MP, 210mAh",
  },
  {
    name: "Even G2",
    url: "https://www.evenrealities.com/products/g2-a",
    used: "599달러부터",
  },
  {
    name: "Even G2 사양",
    url: "https://www.evenrealities.com/smart-glasses",
    used: "36g, 디스플레이, 최대 2일, 카메라 없음",
  },
  {
    name: "Even 스토어",
    url: "https://www.evenrealities.com/store",
    used: "G1 품절 목록가, G2 599달러",
  },
  {
    name: "Brilliant Halo",
    url: "https://brilliant.xyz/products/halo",
    used: "사양. 가격 399달러는 스토어 목록",
  },
  {
    name: "Brilliant 스토어 목록",
    url: "https://brilliant.xyz/collections/frontpage",
    used: "Halo 399달러. Frame은 목록에 없음",
  },
  {
    name: "VITURE Beast",
    url: "https://www.viture.com/product/viture-beast-xr-glasses",
    used: "549달러",
  },
  {
    name: "VITURE Beast 사양",
    url: "https://www.viture.com/academy/xr-glasses/the-beast",
    used: "88g, 1920×1200, 배터리 없음",
  },
  {
    name: "샤오미 AI 안경",
    url: "https://www.mi.com/prod/xiaomi-ai-glasses",
    used: "제품 페이지. 이번 확인에서 가격 숫자 미표시",
  },
  {
    name: "샤오미 소개 · 사양",
    url: "https://www.mi.com/pl/discover/article/?id=4961",
    used: "40g, 12MP, 최대 8.6시간, 디스플레이 없음. 중국 본토 판매",
  },
  {
    name: "연합인포맥스 · 원/달러",
    url: "https://en.infomaxai.com/news/articleView.html?idxno=148929",
    used: "2026-11-17 서울 외환시장 종가 1,336.20원",
  },
];

let category = "all";
let sortKey = "usd-asc";

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function formatUsd(amount) {
  return "$" + amount.toLocaleString("en-US");
}

function formatKrw(amount) {
  return "₩" + amount.toLocaleString("en-US");
}

function convertKrw(usd) {
  return Math.round((usd * USD_KRW) / 1000) * 1000;
}

function krwValue(product) {
  if (product.krwOfficial != null) return product.krwOfficial;
  if (product.usd != null) return convertKrw(product.usd);
  return null;
}

function krwKind(product) {
  if (product.krwOfficial != null) return "official";
  if (product.usd != null) return "converted";
  return "unknown";
}

function glassesSvg() {
  return `<svg viewBox="0 0 48 48" aria-hidden="true" fill="none">
    <circle cx="16" cy="24" r="8" stroke="#191F28" stroke-width="2.4"/>
    <circle cx="32" cy="24" r="8" stroke="#3182F6" stroke-width="2.4"/>
    <path d="M23.2 24h1.6M8 24H5.5M42.5 24H40" stroke="#8B95A1" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`;
}

function badge(product) {
  const tone = product.status === "ended" ? "warn" : product.status === "onsale" ? "blue" : "";
  return `<span class="badge ${tone}">${esc(product.statusLabel)}</span>`;
}

function usdCell(product) {
  if (product.usd == null) return "미확인";
  const tail = product.usdFrom ? "부터" : "";
  const was = product.usdWas ? `<span class="sub"><s>${formatUsd(product.usdWas)}</s></span>` : "";
  return `${formatUsd(product.usd)}${tail}${was}`;
}

function krwCell(product) {
  const kind = krwKind(product);
  const krw = krwValue(product);
  if (kind === "unknown") return `<span class="badge">미확인</span>`;
  if (kind === "official") return `${formatKrw(krw)}<span class="sub">한국 공식</span>`;
  return `약 ${formatKrw(krw)}<span class="sub">환산</span>`;
}

function shortLabel(label) {
  if (label.includes("한국")) return "한국 구매";
  if (label.includes("미국")) return "미국 구매";
  if (label.includes("구매 불가")) return "한국 안내";
  return "구매";
}

function linksHtml(product, mode) {
  return product.links.map((link, index) => {
    const label = mode === "table" ? shortLabel(link.label) : link.label;
    const cls = index === 0 ? "buy" : (mode === "card" ? "text-link" : "buy ghost");
    return `<a class="${cls}" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
  }).join("");
}

function visibleProducts() {
  return PRODUCTS.filter((product) => {
    if (category === "all") return true;
    if (category === "korea") return product.krwOfficial != null;
    return product.category === category;
  });
}

function sortedProducts() {
  const list = visibleProducts();
  const rank = (product) => {
    if (sortKey.startsWith("usd")) return product.usd == null ? null : product.usd;
    if (sortKey.startsWith("krw")) return krwValue(product);
    return 0;
  };
  return list.sort((a, b) => {
    if (sortKey === "name") return a.name.localeCompare(b.name, "ko");
    const av = rank(a);
    const bv = rank(b);
    if (av == null && bv == null) return a.name.localeCompare(b.name, "ko");
    if (av == null) return 1;
    if (bv == null) return -1;
    const dir = sortKey.endsWith("desc") ? bv - av : av - bv;
    return dir || a.name.localeCompare(b.name, "ko");
  });
}

function isPick(id) {
  return PICKS.some((pick) => pick.id === id);
}

function renderPicks() {
  const root = document.getElementById("picks");
  root.innerHTML = PICKS.map((pick) => {
    const product = PRODUCTS.find((item) => item.id === pick.id);
    const usd = product.usd == null ? "미확인" : `${formatUsd(product.usd)}${product.usdFrom ? "부터" : ""}`;
    const krw = krwValue(product);
    const krwText = krwKind(product) === "official"
      ? formatKrw(krw)
      : krwKind(product) === "converted"
        ? `약 ${formatKrw(krw)} 환산`
        : "원화 미확인";
    return `<button class="pick" type="button" data-focus="${esc(pick.id)}">
      <p class="pick-kicker">${esc(pick.kicker)}</p>
      <p class="pick-name">${esc(product.name)}</p>
      <p class="pick-price">${esc(usd)}</p>
      <p class="pick-reason">${esc(krwText)}. ${esc(pick.reason)}</p>
    </button>`;
  }).join("");
}

function renderTable(list) {
  const body = document.getElementById("table-body");
  if (!list.length) {
    body.innerHTML = `<tr><td colspan="10"><p class="empty">이 조건에 맞는 제품이 없습니다.</p></td></tr>`;
    return;
  }
  body.innerHTML = list.map((product) => {
    const pick = isPick(product.id) ? "is-pick" : "";
    return `<tr id="row-${esc(product.id)}" class="${pick}">
      <td>
        <span class="product-name">${esc(product.name)}</span>
        <span class="product-brand">${esc(product.brand)}</span>
        <span class="badges">${badge(product)}</span>
        <div class="row-links">${linksHtml(product, "table")}</div>
      </td>
      <td>${esc(CATEGORY[product.category])}</td>
      <td>${esc(product.camera)}</td>
      <td>${esc(product.display)}</td>
      <td>${esc(product.ai)}</td>
      <td>${esc(product.weight)}</td>
      <td>${esc(product.battery)}</td>
      <td class="num">${usdCell(product)}</td>
      <td class="num">${krwCell(product)}</td>
      <td>${CHECKED}</td>
    </tr>`;
  }).join("");
}

function renderCards(list) {
  const root = document.getElementById("cards");
  if (!list.length) {
    root.innerHTML = `<p class="empty">이 조건에 맞는 제품이 없습니다.</p>`;
    return;
  }
  root.innerHTML = list.map((product, index) => {
    const usd = product.usd == null
      ? `<p class="price-usd">미확인</p>`
      : `<p class="price-usd">${formatUsd(product.usd)}${product.usdFrom ? `<span class="sub">부터</span>` : ""}${product.usdWas ? `<span class="was">${formatUsd(product.usdWas)}</span>` : ""}</p>`;
    return `<article class="card${isPick(product.id) ? " is-pick" : ""}" id="card-${esc(product.id)}" style="animation-delay:${Math.min(index, 8) * 40}ms">
      <div class="card-head">
        <div class="icon tone-${esc(product.category)}">${glassesSvg()}</div>
        <div>
          <p class="product-brand">${esc(product.brand)}</p>
          <h2>${esc(product.name)}</h2>
          <div class="badges">${badge(product)}<span class="badge">${esc(CATEGORY[product.category])}</span></div>
        </div>
      </div>
      <div class="price-block">
        ${usd}
        <p class="price-krw">${krwCell(product)}</p>
      </div>
      <dl class="specs">
        <div><dt>카메라</dt><dd>${esc(product.camera)}</dd></div>
        <div><dt>디스플레이</dt><dd>${esc(product.display)}</dd></div>
        <div><dt>AI</dt><dd>${esc(product.ai)}</dd></div>
        <div><dt>무게</dt><dd>${esc(product.weight)}</dd></div>
        <div><dt>배터리</dt><dd>${esc(product.battery)}</dd></div>
        <div><dt>확인</dt><dd>${CHECKED}</dd></div>
      </dl>
      <p class="extra">${esc(product.note)}</p>
      <div class="card-foot">
        ${linksHtml(product, "card")}
      </div>
    </article>`;
  }).join("");
}

function renderSources() {
  document.getElementById("sources").innerHTML = SOURCES.map((source) => `
    <li>
      <a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.name)}</a>
      <span class="source-used">${esc(source.used)}</span>
    </li>
  `).join("");
}

function render() {
  const list = sortedProducts();
  document.getElementById("count").textContent = String(list.length);
  renderTable(list);
  renderCards(list);
}

function focusProduct(id) {
  category = "all";
  document.querySelectorAll(".chip").forEach((button) => {
    button.classList.toggle("is-on", button.dataset.cat === "all");
  });
  render();
  const row = document.getElementById("row-" + id);
  const card = document.getElementById("card-" + id);
  const rowVisible = row && row.getClientRects().length > 0;
  const target = rowVisible ? row : card;
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.classList.remove("pulse");
  void target.offsetWidth;
  target.classList.add("pulse");
}

document.getElementById("picks").addEventListener("click", (event) => {
  const button = event.target.closest("[data-focus]");
  if (!button) return;
  focusProduct(button.dataset.focus);
});

document.querySelector(".chips").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cat]");
  if (!button) return;
  category = button.dataset.cat;
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("is-on", chip === button));
  render();
});

document.querySelector(".sorts").addEventListener("click", (event) => {
  const button = event.target.closest("[data-sort]");
  if (!button) return;
  sortKey = button.dataset.sort;
  document.querySelectorAll(".sort").forEach((sort) => sort.classList.toggle("is-on", sort === button));
  render();
});

renderPicks();
renderSources();
render();
