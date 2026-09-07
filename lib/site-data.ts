import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  Church,
  ClipboardCheck,
  Factory,
  HelpCircle,
  Home,
  Landmark,
  Mail,
  MapPin,
  MonitorCog,
  PanelsTopLeft,
  Phone,
  School,
  Sparkles,
  Store,
  Truck,
  Wrench,
} from 'lucide-react';

export const company = {
  name: '가온전광판',
  tagline: 'LED 전광판 설계·제작·설치',
  founded: '2002년 설립',
  phone: '032-811-5916',
  email: 'sg4033@hanmail.net',
  address: '인천광역시 남동구 호구포로 50, 513-2',
  region: '인천 중심 수도권',
  owner: '[정보 입력 필요]',
  businessNumber: '[정보 입력 필요]',
  hours: '[정보 입력 필요]',
};

export const navItems = [
  { label: '회사소개', href: '/company' },
  { label: '제품소개', href: '/products' },
  { label: '적용 분야', href: '/applications' },
  { label: '설치사례', href: '/portfolio' },
  { label: '제작·설치', href: '/process' },
  { label: '블로그', href: '/blog' },
  { label: '고객지원', href: '/support' },
  { label: '견적문의', href: '/quote' },
];

export const reasons = [
  { icon: PanelsTopLeft, title: '현장 맞춤 설계', description: '건물 전면, 동선, 시야각, 주변 밝기를 확인해 전광판 사양을 제안합니다.', imageLabel: '설계 도면과 현장 검토 이미지' },
  { icon: MonitorCog, title: '자체 제작 시스템', description: '모듈, 프레임, 제어부를 용도에 맞게 구성해 유지관리까지 고려합니다.', imageLabel: 'LED 모듈과 제어 장치 이미지' },
  { icon: Truck, title: '전문 설치', description: '옥외 구조물, 전기 배선, 화면 설정까지 설치 현장에 맞춰 진행합니다.', imageLabel: '전광판 설치 작업 이미지' },
  { icon: Wrench, title: '유지관리', description: '사용 방법 안내와 점검이 필요한 항목을 명확하게 정리해 드립니다.', imageLabel: '전광판 유지관리 이미지' },
];

export const productGroups = [
  { slug: 'outdoor-full-color', title: '옥외 풀컬러 전광판', summary: '건물 외벽과 매장 전면에서 브랜드와 행사를 크게 보여주는 고휘도 전광판입니다.', items: ['건물 외벽 전광판', '매장 전면 전광판', '옥상·대형 전광판', '돌출형 전광판', '양면형 전광판'] },
  { slug: 'indoor-led', title: '실내용 LED 전광판', summary: '회의실, 로비, 강당, 교회, 행사장에 맞춘 선명한 실내 영상 전광판입니다.', items: ['회의실 전광판', '로비 안내 전광판', '강당·교회 전광판', '전시장·행사장 전광판', '매장용 영상 전광판'] },
  { slug: 'text-info', title: '문자·정보 전광판', summary: '안내 문구, 생산 현황, 주차 정보, 가격과 일정을 빠르게 전달합니다.', items: ['안내 문자 전광판', '공장 생산현황판', '주차 안내판', '학교·관공서 안내판', '가격·일정 표시판'] },
  { slug: 'special-products', title: '기획상품', summary: '작은 공간에도 적용하기 쉬운 소형·맞춤형 LED 전광판 제품군입니다.', items: ['미니전광판', '탁상형 LED 전광판', '벽걸이 소형 전광판', '가격표시 전광판', '대기번호 전광판', '맞춤형 소형 전광판'] },
];

export const applications = [
  { slug: 'commercial', icon: Store, title: '상업시설', detail: '빌딩, 쇼핑몰, 매장 전면 홍보와 안내', products: '옥외 풀컬러 전광판, 문자·정보 전광판' },
  { slug: 'factory', icon: Factory, title: '기업·공장', detail: '생산 현황, 안전 안내, 방문객 안내', products: '공장 생산현황판, 로비 안내 전광판' },
  { slug: 'public', icon: Landmark, title: '관공서', detail: '민원 안내, 행사 고지, 외부 홍보', products: '옥외 전광판, 안내 문자 전광판' },
  { slug: 'school', icon: School, title: '학교·교육시설', detail: '공지, 행사, 강당 영상 송출', products: '강당 전광판, 학교 안내판' },
  { slug: 'church', icon: Church, title: '교회·종교시설', detail: '예배 화면, 행사 안내, 외벽 홍보', products: '실내용 LED 전광판, 옥외 전광판' },
  { slug: 'restaurant', icon: Home, title: '음식점·매장', detail: '메뉴, 가격, 이벤트, 대기 안내', products: '가격표시 전광판, 매장용 영상 전광판' },
  { slug: 'event', icon: Sparkles, title: '행사장·공연장', detail: '무대 영상, 현장 안내, 행사 홍보', products: '전시장·행사장 전광판' },
];

export const portfolioItems = [
  { slug: 'incheon-store-front-led', title: '인천 ○○매장 외벽 전광판', category: '옥외 전광판', place: '음식점·매장', region: '인천', summary: '도로변 시인성을 고려해 외벽형 풀컬러 전광판으로 구성한 사례입니다.' },
  { slug: 'namdong-factory-info-board', title: '경기 ○○공장 생산현황판', category: '문자·정보 전광판', place: '기업·공장', region: '수도권', summary: '현장 작업자가 멀리서도 확인할 수 있도록 정보 표시 중심으로 구성했습니다.' },
  { slug: 'church-indoor-led-screen', title: '인천 ○○교회 실내 LED 스크린', category: '실내 전광판', place: '교회·종교시설', region: '인천', summary: '예배와 행사 화면 송출을 위해 실내 밝기와 좌석 동선을 고려했습니다.' },
  { slug: 'small-price-led', title: '부평 ○○매장 가격표시 전광판', category: '미니·소형 전광판', place: '음식점·매장', region: '인천', summary: '카운터 주변 작은 공간에 맞춘 기획상품 적용 사례입니다.' },
];

export const processSteps = ['상담 접수', '현장 또는 자료 확인', '제품 사양 및 견적 제안', '디자인과 제작', '현장 설치 및 화면 설정', '운영 방법 안내', '사후관리'];

export const blogPosts = [
  {
    slug: 'led-signage-selection-guide',
    category: '제품 선택 가이드',
    title: '전광판을 고를 때 먼저 확인할 5가지',
    summary: '설치 위치, 보는 거리, 밝기, 크기, 송출 방식, 유지관리 기준을 먼저 정하면 견적이 명확해집니다.',
    date: '2026-09-05',
    image: '/mockup-assets/blog-guide-clean.png',
    sections: [
      { heading: '설치 위치가 사양을 결정합니다', body: '전광판은 실내인지 옥외인지, 햇빛을 직접 받는지, 사람이 어느 방향에서 보는지에 따라 필요한 밝기와 모듈 구성이 달라집니다. 매장 전면처럼 낮에도 노출되는 위치라면 시인성과 방수, 고정 구조를 함께 봐야 합니다.' },
      { heading: '보는 거리와 화면 크기를 함께 정합니다', body: '가까이 보는 전광판은 무조건 큰 화면보다 픽셀 간격과 선명도가 중요합니다. 반대로 도로변이나 건물 외벽처럼 멀리서 보는 경우에는 화면 크기, 노출 높이, 주변 간판과의 대비가 더 중요합니다.' },
      { heading: '송출 방식은 운영 편의와 연결됩니다', body: '매일 문구를 바꾸는 매장과 영상 위주로 운영하는 공간은 필요한 제어 방식이 다릅니다. USB, PC, 네트워크, 예약 송출 등 운영자가 실제로 다룰 수 있는 방식을 먼저 정하면 이후 관리가 쉬워집니다.' },
      { heading: '견적 전 준비하면 좋은 자료', body: '설치 위치 사진, 대략적인 가로·세로 크기, 희망 콘텐츠 예시, 전원 위치, 설치 희망일을 준비하면 상담 시간이 줄어듭니다. 정확한 가격과 사양은 현장 조건 확인 후 안내하는 것이 안전합니다.' },
    ],
  },
  {
    slug: 'outdoor-led-before-install',
    category: '제작·설치 이야기',
    title: '옥외 전광판 설치 전 현장에서 확인하는 것',
    summary: '외벽 상태, 전기 배선, 시야각, 주변 간판 환경을 먼저 확인해야 설치 후 화면 효과가 안정적입니다.',
    date: '2026-09-04',
    image: '/mockup-assets/blog-install-clean.png',
    sections: [
      { heading: '외벽과 고정 구조 확인', body: '옥외 전광판은 화면 품질만큼 고정 구조가 중요합니다. 외벽 재질, 고정 가능한 위치, 바람 영향을 받는 방향, 점검 가능한 공간을 확인해야 장기간 안정적으로 사용할 수 있습니다.' },
      { heading: '전원과 배선 경로 확인', body: '전광판은 밝기와 크기에 따라 필요한 전기 조건이 달라집니다. 전원 위치와 배선 경로가 복잡하면 마감과 유지관리에도 영향을 주기 때문에 설치 전 단계에서 함께 확인합니다.' },
      { heading: '시야각과 주변 밝기 확인', body: '도로변, 골목, 건물 전면, 실내 출입구는 보는 각도와 주변 밝기가 모두 다릅니다. 지나가는 사람이 자연스럽게 보는 방향을 기준으로 화면 위치와 밝기를 조정해야 합니다.' },
      { heading: '현장 사진만으로도 1차 상담이 가능합니다', body: '정확한 실측은 현장 확인이 필요하지만, 외벽 전체 사진과 가까운 사진, 전원 위치, 주변 도로 방향을 보내주시면 가능한 제품군과 대략적인 검토 방향을 안내할 수 있습니다.' },
    ],
  },
  {
    slug: 'mini-led-products',
    category: '미니전광판·기획상품',
    title: '작은 매장에 맞는 미니전광판 활용법',
    summary: '가격, 대기번호, 이벤트 안내처럼 자주 바뀌는 정보를 작은 LED 전광판으로 효율적으로 보여줄 수 있습니다.',
    date: '2026-09-03',
    image: '/mockup-assets/blog-mini-clean.png',
    sections: [
      { heading: '작은 공간일수록 목적이 분명해야 합니다', body: '미니전광판은 공간을 적게 차지하지만 눈에 잘 띄어야 합니다. 메뉴 가격, 대기 안내, 행사 문구, 영업 안내처럼 자주 바뀌는 정보를 중심으로 쓰면 효과가 좋습니다.' },
      { heading: '카운터와 벽면 위치를 비교합니다', body: '카운터 가까이에 두면 계산 전 안내에 좋고, 벽면에 설치하면 매장 안쪽에서도 확인하기 쉽습니다. 사람의 동선과 시선 높이를 기준으로 위치를 정하는 것이 좋습니다.' },
      { heading: '콘텐츠 변경이 쉬워야 오래 씁니다', body: '작은 전광판은 운영자가 자주 수정하는 경우가 많습니다. 문구 변경 방식과 예약 송출 가능 여부를 미리 정해두면 이벤트나 가격 변경에 빠르게 대응할 수 있습니다.' },
      { heading: '기획상품은 계속 추가할 수 있습니다', body: '가온전광판의 기획상품 영역은 미니전광판, 탁상형, 벽걸이형, 가격표시형 등 작은 제품군을 추가하기 쉬운 구조로 관리할 수 있습니다.' },
    ],
  },
  {
    slug: 'led-maintenance-basic',
    category: '전광판 관리방법',
    title: '전광판을 오래 쓰기 위한 기본 관리법',
    summary: '밝기 설정, 송출 장비, 환기, 외부 오염 상태를 주기적으로 확인하면 불필요한 고장을 줄일 수 있습니다.',
    date: '2026-09-02',
    image: '/mockup-assets/blog-guide-clean.png',
    sections: [
      { heading: '밝기는 환경에 맞춰 조정합니다', body: '항상 최대 밝기로 운영하면 전력 사용과 발열 부담이 커질 수 있습니다. 낮과 밤, 실내와 옥외 조건에 맞춰 밝기를 조정하는 것이 좋습니다.' },
      { heading: '송출 장비를 함께 확인합니다', body: '화면 이상이 전광판 자체 문제가 아니라 송출 장비, 케이블, 콘텐츠 파일 문제인 경우도 있습니다. 점검할 때는 화면과 제어 장비를 함께 확인해야 합니다.' },
      { heading: '정기 점검 항목을 정해둡니다', body: '외부 오염, 고정 부위, 환기 상태, 화면 색상 차이, 전원 상태를 주기적으로 살피면 문제를 초기에 발견할 수 있습니다.' },
    ],
  },
  {
    slug: 'content-operation-method',
    category: '전광판 기초정보',
    title: '전광판 콘텐츠는 어떻게 바꾸나요?',
    summary: '운영 방식은 제품 구성에 따라 다르지만, 문구형과 영상형 모두 관리자가 쉽게 수정할 수 있는 구조를 선택하는 것이 중요합니다.',
    date: '2026-09-01',
    image: '/mockup-assets/blog-install-clean.png',
    sections: [
      { heading: '문구형과 영상형은 운영 방식이 다릅니다', body: '문자 안내 중심이라면 간단한 입력 방식이 편리하고, 영상이나 이미지가 많다면 파일 관리와 예약 송출 기능이 중요합니다.' },
      { heading: '변경 주기를 먼저 생각합니다', body: '매일 바꾸는 콘텐츠와 계절별로 바꾸는 콘텐츠는 필요한 관리 방식이 다릅니다. 운영자가 직접 다룰 수 있는 수준으로 구성하는 것이 핵심입니다.' },
      { heading: '초기 교육이 중요합니다', body: '설치 후에는 전원, 콘텐츠 변경, 기본 점검 방법을 함께 안내받아야 안정적으로 운영할 수 있습니다.' },
    ],
  },
  {
    slug: 'quote-request-tips',
    category: '가온전광판 소식',
    title: '견적문의 전에 보내주시면 좋은 자료',
    summary: '설치 위치 사진, 원하는 크기, 사용 목적, 희망 설치일을 알려주시면 상담과 견적 검토가 더 빠르게 진행됩니다.',
    date: '2026-08-31',
    image: '/mockup-assets/blog-mini-clean.png',
    sections: [
      { heading: '현장 사진은 여러 각도가 좋습니다', body: '설치할 벽면만 가까이 찍은 사진보다 주변 도로, 출입구, 전원 위치가 함께 보이는 사진이 도움이 됩니다.' },
      { heading: '원하는 화면 예시를 알려주세요', body: '영상 위주인지, 안내 문구 위주인지, 가격표시처럼 자주 바꾸는 정보인지에 따라 추천 제품이 달라집니다.' },
      { heading: '확정되지 않은 정보는 괜찮습니다', body: '정확한 크기나 사양을 몰라도 괜찮습니다. 설치 목적과 공간 조건을 먼저 알려주시면 검토 방향을 잡아드립니다.' },
    ],
  },
];

export const faqs = ['전광판 설치 가능 지역은 어떻게 되나요?', '설치까지 보통 얼마나 걸리나요?', '제품 외부 크기와 화면 크기는 어떻게 정하나요?', '전기 사용량은 어느 정도인가요?', '유지관리는 어떻게 진행되나요?'];

export const supportCards = [
  { icon: CalendarCheck, title: '공지사항', description: '가온전광판의 운영 안내와 새 소식을 정리합니다.' },
  { icon: HelpCircle, title: '전광판 정보', description: '제품 선택과 설치 전 확인사항을 쉽게 확인할 수 있습니다.' },
  { icon: ClipboardCheck, title: '자료실', description: '제품 설명서, 송출 안내, 요청 양식을 관리할 수 있는 구조입니다.' },
  { icon: BadgeCheck, title: 'A/S 문의', description: '점검 요청과 문의 내역은 관리자 확인 구조로 확장할 수 있습니다.' },
];

export const contactItems = [
  { icon: MapPin, label: 'ADDRESS', value: company.address },
  { icon: Phone, label: 'TEL', value: company.phone },
  { icon: Mail, label: 'E-mail', value: company.email },
];


