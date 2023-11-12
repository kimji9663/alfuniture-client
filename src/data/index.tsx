import { sofa01, sofa02, sofa03, sofa04, sofa05, table01, chair01, chair02, chair03, chair04, light01, rankingItem01, rankingItem02, rankingItem03, rankingItem04, rankingItem05, rankingItem06, jamesLee01, jamesLee02, jamesLee03, jamesLee04, onerain01, onerain02, onerain03, aerobiey06, aerobiey07, aerobiey08, aerobiey09, henredn04, henredn05, henredn06, henredn07, umasqu04, umasqu05, umasqu06, umasqu07, recentlyProduct01, recentlyProduct02, recentlyProduct03, recentlyProduct04, recentlyProduct05, recentlyProduct06, recentlyProduct07, recentlyProduct08, recentlyProduct09, onerain_coupon03, deliveryProduct } from "./../assets/images/product"
import { aerobiey, alfdn, clods, jameslee, onerain } from "../assets/images/logo"
import { onerainBrand, aerobiey01, alfdn01, alfdn02, alfdn03, alfdn04} from "../assets/images/brand"
import { thumb_brand01 } from "../assets/images"
import { styleBanner01, styleBanner03, styleBanner04, styleBanner05, styleBanner06, styleBanner07, brandCollectionVideo01, brandCollectionVideo02 } from "../assets/images/banner"
import { casual, cen, classic, minimal, modern, northernEU, plant, romantic } from "../assets/images/filterIcon/styles";

export const likeProductData = [
  {
    id: 0,
    imgsrc: chair03,
    like: true,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[23s] HRD-0152",
    productName: "릴렉스 체어 (3colors)",
    price: 4834000,
    colors: ["#A55555", "#192552", "#494A4C"],
    name: "의자",
  },
  {
    id: 1,
    imgsrc: sofa02,
    like: false,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[22s] HRD-210",
    productName: "1인 모던 쇼파 ",
    price: 6790000,
    colors: ["#864000"],
    name: "소파",
  },
  {
    id: 2,
    imgsrc: sofa03,
    like: false,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[23s] HRD-251",
    productName: "기획전 시티 쇼파",
    price: 2230000,
    colors: ["#CBC6C3"],
    name: "소파",
  },
  {
    id: 3,
    imgsrc: sofa01,
    like: false,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[23s] HRD-123",
    productName: "올드 가죽쇼파",
    price: 1230000,
    colors: ["#A55555"],
    name: "소파",
  },
]

export const rankingProductData = [
  {
    id: 0,
    rank: 1,
    imgsrc: rankingItem01,
    shopName: "ONERAIN",
    modelName: "[23Series] OR-102",
    productName: "원레인 우든 테이블",
    name: "테이블",
  },
  {
    id: 1,
    rank: 2,
    imgsrc: rankingItem02,
    shopName: "ONERAIN",
    modelName: "[22Series] OR-210",
    productName: "원레인 그랑프리 체어",
    name: "의자",
  },
  {
    id: 2,
    rank: 3,
    imgsrc: rankingItem03,
    shopName: "ONERAIN",
    modelName: "[23Series] OR-110",
    productName: "원레인 우든 테이블",
    name: "테이블",
  },
  {
    id: 3,
    rank: 4,
    imgsrc: rankingItem04,
    shopName: "ONERAIN",
    modelName: "[22Series] OR-214",
    productName: "원레인 커러드 체어",
    name: "의자",
  },
  {
    id: 4,
    rank: 5,
    imgsrc: rankingItem05,
    shopName: "ONERAIN",
    modelName: "[23Series] OR-217",
    productName: "원레인 럭커드 화이트 체어",
    name: "의자",
  },
]

export const cartProductData = [
  {
    imgsrc: sofa01,
    shopName: "ALFDEN",
    modelName: "[23Series] AD-388",
    productName: "카멜피아",
    option1: "베이지",
    option2: "라탄",
    count: 2,
    price: 240000,
    deliveryCharge: 100000,
    coupon: [
      {
        name: "쿠폰1",
        discount: 14000,
      },
    ],
  },
  {
    imgsrc: table01,
    shopName: "ALFDEN",
    modelName: "[23Series] AD-388",
    productName: "모닝 데스크",
    option1: "옐로우 우든",
    option2: null,
    count: 1,
    price: 300000,
    deliveryCharge: 0,
    coupon: [],
  },
];

export const styleTypes = [
  {
    id: "sofa",
    name: "소파",
  },
  {
    id: "bed",
    name: "침대",
  },
  {
    id: "desk",
    name: "책상",
  },
  {
    id: "table",
    name: "테이블",
  },
  {
    id: "chair",
    name: "의자",
  },
  {
    id: "lights",
    name: "조명",
  },
  {
    id: "kids",
    name: "키즈",
  },
  {
    id: "closet",
    name: "수납장",
  },
  {
    id: "home_deco",
    name: "홈데코",
  }
]

export const brandShopPanelProductData = [
  {
    id: 0,
    imgsrc: jamesLee01,
    like: true,
    likeCount: 556,
    shopName: "James Lee",
    modelName: "[23Series]JL-302",
    productName: "Basic Wooden Table",
    price: 4834000,
    colors: ["#512C2C", "#A55555"]
  },
  {
    id: 1,
    imgsrc: jamesLee02,
    like: false,
    likeCount: 556,
    shopName: "James Lee",
    modelName: "[23Series]JL-303",
    productName: "Circular Table",
    price: 6790000,
    colors: ["#A55555"]
  },
  {
    id: 2,
    imgsrc: jamesLee03,
    like: false,
    likeCount: 556,
    shopName: "James Lee",
    modelName: "[23Series]JL-354",
    productName: "Basic Cabinet",
    price: 510000,
    colors: ["#DED3D1", "#054A5A", "#67765B"]
  },
  {
    id: 3,
    imgsrc: jamesLee04,
    like: false,
    likeCount: 556,
    shopName: "James Lee",
    modelName: "[23Series]JL-201",
    productName: "Basic Lighting",
    price: 230000,
    colors: ["#A55555", "#192552", "#494A4C"]
  },
]

export const brandData = {
  name: "James Lee",
  description: "제임스리",
  image: jameslee, 
  isLiked: true, 
};

export const homeBannerData = [
  {
    discription: "chair01",
    img: chair04
  },
  {
    discription: "chair02",
    img: chair04
  },
  {
    discription: "chair03",
    img: chair04
  },
  {
    discription: "chair04",
    img: chair04
  },
]

export const homeBrandProductData = [
  {
    id: 0,
    imgsrc: sofa04,
    like: true,
    likeCount: 556,
    shopName: "James Lee - Sofa",
    modelName: "[23Series] JL-305",
    productName: "Basic Sofa",
    price: 969000,
  },
  {
    id: 1,
    imgsrc: sofa05,
    like: false,
    likeCount: 556,
    shopName: "James Lee - Sofa",
    modelName: "[23Series] JL-305",
    productName: "soft_sofa",
    price: 230000,
  },
]

export const brandRankingData = [
  {
    id: 1,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey1",
    discription: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 2,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey2",
    discription: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 3,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey3",
    discription: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 4,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey4",
    discription: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 5,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey5",
    discription: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
]

export const profileTagData = [
  {
    id: "1",
    name: "금속디자인",
  },
  {
    id: "2",
    name: "미드센추리",
  },
  {
    id: "3",
    name: "스테인리스 스틸",
  },
  {
    id: "4",
    name: "반짝이는 가구",
  },
  {
    id: "5",
    name: "금속 가구",
  },
  {
    id: "6",
    name: "북유럽",
  },
]

export const brandListData = [
  {
    id: "james_lee",
    name: "James Lee",
    logo: jameslee
  },
  {
    id: "alfdn",
    name: "ALFDN",
    logo: alfdn
  },
  {
    id: "rerobiey",
    name: "Rerobiey",
    logo: aerobiey
  },
  {
    id: "clods",
    name: "CLODS",
    logo: clods
  }
]

export const hasCouponData = [
  {
    imgsrc: onerain_coupon03,
    shopName: "Aerobiey",
    couponName: "에어로우뷔 브랜드 10% 쿠폰",
    startDate: "20230925",
    endDate: "20231120",
  },
  {
    imgsrc: onerain_coupon03,
    shopName: "James Lee",
    couponName: "제임스 리  브랜드 10% 쿠폰",
    startDate: "20230920",
    endDate: "20231115",
  },
  {
    imgsrc: onerain_coupon03,
    shopName: "One rain",
    couponName: "원레인  브랜드 10% 쿠폰",
    startDate: "20230922",
    endDate: "20231128",
  },
]

export const getCouponData = [
  {
    imgsrc: onerain_coupon03,
    shopName: "James Lee",
    couponName: "제임스 리  브랜드 10% 쿠폰",
    startDate: "20230920",
    endDate: "20231118",
  },
  {
    imgsrc: onerain_coupon03,
    shopName: "Aerobiey",
    couponName: "에어로우뷔 브랜드 10% 쿠폰",
    startDate: "20230925",
    endDate: "20231118",
  },
  {
    imgsrc: onerain_coupon03,
    shopName: "One rain",
    couponName: "원레인  브랜드 10% 쿠폰",
    startDate: "20230822",
    endDate: "20231128",
  },
]


export const myDeliveryInfo = [
  {
    date: "2023.02.23",
    state: "배송준비중",
    img: deliveryProduct,
    brand: "HC ART",
    optionCode: "[21Series] HCA-309",
    name: "HC 아트 우든체어",
    deliveryNum: "158290398",
    deliveryData: 
      [
        {
            "location": "해외배송",
            "deliveryStatus": "집하",
            "date": "3/14(화)  06:33"
        },
        {
            "location": "이탈리아 > 인천항",
            "deliveryStatus": "배송중",
            "date": "3/15(수)  01:14"
        },
        {
            "location": "통관",
            "deliveryStatus": "통관절차 진행중",
            "date": "3/15(수)  08:21"
        },
        {
            "location": "통관",
            "deliveryStatus": "통관 처리완료",
            "date": "3/15(수)  08:21"
        },
        {
            "location": "국내배송",
            "deliveryStatus": "배송중",
            "date": "3/15(수)  14:02"
        },
        {
            "location": "판교",
            "deliveryStatus": "배송완료",
            "date": "3/15(수)  17:11"
        }
    ]
  },
]

export const deliveryStatusFilterData = [
  {
    id: "waiting",
    name: "배송준비중",
  },
  {
    id: "shipping",
    name: "배송중",
  },
  {
    id: "completed",
    name: "배송완료",
  },
  {
    id: "cancel",
    name: "취소/교환/반품",
  },
]

export const myOrderList = [
  {
    date: "2023.02.23",
    state: "배송준비중",
    img: chair03,
    brand: "OneRain",
    optionCode: "[23s] OR-045",
    name: "2인 릴렉스 체어",
  },
  {
    date: "2022.03.13",
    state: "배송완료",
    img: chair02,
    brand: "HC ART",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
  },
  {
    date: "2022.03.13",
    state: "취소",
    img: sofa04,
    brand: "HC ART",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
  },
  {
    date: "2022.03.13",
    state: "반품",
    img: sofa04,
    brand: "HC ART",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
  },
]

export const myPageOrderDetailData = [
  {
    imgsrc: sofa01,
    shopName: "ALFDEN",
    modelName: "[23Series] AD-388",
    productName: "카멜피아",
    option1: "브라운,블랙",
    option2: "월넛",
    count: 1,
    price: 1594500,
    discount: 159450,
    totalPrice: 1435050,
    deliveryCharge: 0,
    coupon: [
      {
        name: "쿠폰1",
        discount: 14000,
      },
    ],
    deliveryInfo: {
      recipient: "홍길동",
      contact: "010-0000-0000",
      address: "서울특별시 00로 00아파트 000동 000호",
    },
    paymentCard: "국민카드",
    paymentMethod: "일시불",
  },
];

export const recentlyProductData = [
  {
    id: 0,
    imgsrc: recentlyProduct01,
    like: true,
    likeCount: 556,
    shopName: "Aerobiey",
    modelName: "[23s] AB-098",
    productName: "골드 무드등",
    price: 2300000,
    colors: ["#A55555", "#192552", "#494A4C"]
  },
  {
    id: 1,
    imgsrc: recentlyProduct02,
    like: false,
    likeCount: 556,
    shopName: "Aerobiey",
    modelName: "[23s] AB-198",
    productName: "옐로우 체어",
    price: 1230000,
    colors: ["#864000"]
  },
  {
    id: 2,
    imgsrc: recentlyProduct03,
    like: false,
    likeCount: 556,
    shopName: "OneRain",
    modelName: "[23s] OR-398",
    productName: "클래식 체어",
    price: 230000,
    colors: ["#CBC6C3"]
  },
  {
    id: 3,
    imgsrc: recentlyProduct04,
    like: true,
    likeCount: 556,
    shopName: "OneRain",
    modelName: "[23s] OR-198",
    productName: "화이트 데스크",
    price: 1000000,
    colors: ["#A55555", "#192552", "#494A4C"]
  },
  {
    id: 4,
    imgsrc: recentlyProduct05,
    like: false,
    likeCount: 556,
    shopName: "OneRain",
    modelName: "[23s] OR-198",
    productName: "원목 인테리어",
    price: 2230000,
    colors: ["#CBC6C3"]
  },
  {
    id: 5,
    imgsrc: recentlyProduct06,
    like: false,
    likeCount: 556,
    shopName: "Aerobiey",
    modelName: "[23s] AB-088",
    productName: "클래식 스탠딩 등",
    price: 370000,
    colors: ["#CBC6C3"]
  },
  {
    id: 6,
    imgsrc: recentlyProduct07,
    like: false,
    likeCount: 556,
    shopName: "Aerobiey",
    modelName: "[23s] AB-498",
    productName: "모던 화병",
    price: 300000,
    colors: ["#CBC6C3"]
  },
  {
    id: 7,
    imgsrc: recentlyProduct08,
    like: false,
    likeCount: 556,
    shopName: "ALFDN",
    modelName: "[Set] AD-012",
    productName: "알프든 테이블 도자기",
    price: 230000,
    colors: ["#A55555"]
  },
  {
    id: 8,
    imgsrc: recentlyProduct09,
    like: true,
    likeCount: 556,
    shopName: "OneRain",
    modelName: "[23s] OR-398",
    productName: "클래식 체어",
    price: 230000,
    colors: ["#A55555", "#192552", "#494A4C"]
  },
  {
    id: 9,
    imgsrc: sofa02,
    like: false,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[22s] HRD-210",
    productName: "1인 모던 쇼파 ",
    price: 6790000,
    colors: ["#864000"]
  },
  {
    id: 10,
    imgsrc: sofa03,
    like: false,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[23s] HRD-251",
    productName: "기획전 시티 쇼파",
    price: 2230000,
    colors: ["#CBC6C3"]
  },
  {
    id: 11,
    imgsrc: sofa01,
    like: false,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[23s] HRD-123",
    productName: "올드 가죽쇼파",
    price: 1230000,
    colors: ["#A55555"]
  },
  {
    id: 12,
    imgsrc: chair03,
    like: true,
    likeCount: 556,
    shopName: "Henredo",
    modelName: "[23s] HRD-0152",
    productName: "릴렉스 체어 (3colors)",
    price: 4834000,
    colors: ["#A55555", "#192552", "#494A4C"]
  },
]

export const reviewMyOrderData = [
  {
    date: "2023.02.23",
    state: "배송완료",
    img: chair03,
    brand: "Aerobiey",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
  },
  {
    date: "2022.03.13",
    state: "배송완료",
    img: chair03,
    brand: "Aerobiey",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
  },
]

export const reviewData = [
  {
    date: "2023.02.23",
    img: deliveryProduct,
    brand: "Aerobiey",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
    score: 4,
    tagList: [
      {
        name: "생각보다 커요",
      },
      {
        name: "색감 예뻐요",
      },
      {
        name: "가벼워요",
      },
      {
        name: "인스타감성",
      },
      {
        name: "북유럽",
      },
      {
        name: "분위기 있어요",
      },
    ],
    contents: "배송은 한달 반정도 걸렸어요. 홈페이지에 안내된 것보다 조금더 늦어질 것같다는 안내는 업체에서 미리 주셨구요. 배송에 관한 문의전화를 했을때도 친절히 안내해주셨습니다."
  },
  {
    date: "2023.02.23",
    img: deliveryProduct,
    brand: "Aerobiey",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
    score: 3,
    tagList: [
      {
        name: "생각보다 커요",
      },
      {
        name: "색감 예뻐요",
      },
      {
        name: "가벼워요",
      },
      {
        name: "인스타감성",
      },
    ],
    contents: "배송은 한달 반정도 걸렸어요. 홈페이지에 안내된 것보다 조금더 늦어질 것같다는 안내는 업체에서 미리 주셨구요. 배송에 관한 문의전화를 했을때도 친절히 안내해주셨습니다."
  },
  {
    date: "2023.02.23",
    img: deliveryProduct,
    brand: "Aerobiey",
    optionCode: "[23s] AB-045",
    name: "블랙 모던 소파",
    score: 5,
    tagList: [
      {
        name: "생각보다 커요",
      },
      {
        name: "색감 예뻐요",
      },
      {
        name: "가벼워요",
      },
      {
        name: "인스타감성",
      },
      {
        name: "북유럽",
      },
      {
        name: "분위기 있어요",
      },
    ],
    contents: "배송은 한달 반정도 걸렸어요."
  },
]

export const WriteReviewTagData = [
  {
    name: "생각보다 커요",
  },
  {
    name: "적당해요",
  },
  {
    name: "조금 작아요",
  },
  {
    name: "색감 예뻐요",
  },
  {
    name: "분위기 있어요",
  },
  {
    name: "실용적이에요",
  },
  {
    name: "무거워요",
  },
  {
    name: "가벼워요",
  },
  {
    name: "선물하기 좋아요",
  },
]

export const notificationData = [
  {
    title: "혜택",
    name: "",
    content: "앱 설치 후 회원가입 시 모든 브랜드 10% 할인쿠폰 증정",
    date: "2023.09.01 00:00",
  },
  {
    title: "답변",
    name: "ALFDN",
    content: "카멜프든 상품에 남겨주신 문의글에 답변이 달렸습니다.",
    date: "2023.08.25 00:00",
  },
  {
    title: "재입고알림",
    name: "",
    content: "[22 Series] OR-214 원레인 컬러드 체어가 재입고 되었습니다.",
    date: "2023.09.01 21:40",
  },
];

export const featuredBrandData = [
  {
    id: 1,
    img: light01,
    name: "Aerobiey",
    description: "60년 경력의 노하우와 감각으로 프랑스 가구를 대표하는 브랜드"
  },
  {
    id: 2,
    img: chair01,
    name: "OneRain",
    description: "미니멀과 디테일의 균형에 집중하는 영국 프리미엄 가구 브랜드"
  },
  {
    id: 3,
    img: thumb_brand01,
    name: "James Lee",
    description: "디자인과 아트의 경계에서 미적 가치를 재해석 하며 일상에 녹아드는 프리미엄 가구 브랜드"
  }
]

export const orderCouponData = [
  {
    id: "rerobiey",
    brand: "Rerobiey",
    title: "브랜드 10% 쿠폰",
    logo: aerobiey,
    expiration: 20,
  },
  {
    id: "onerain",
    brand: "ONERAIN",
    title: "브랜드 10% 쿠폰",
    logo: onerain,
    expiration: 15,
  },
  {
    id: "james_lee",
    brand: "James Lee",
    title: "브랜드 10% 쿠폰",
    logo: jameslee,
    expiration: 11,
  },
  {
    id: "clods",
    brand: "CLODS",
    title: "브랜드 10% 쿠폰",
    logo: clods,
    expiration: 3,
  }
]
interface OrderTermAgreement {
  id: string;
  require: boolean;
  label: string;
}

export const orderTermsAgreementData: OrderTermAgreement[] = [
  {
    id: "check_agree_age",
    require: true,
    label: "개인정보 수집/이용 동의"
  },
  {
    id: "check_terms_of_use",
    require: true,
    label: "개인정보 수집/이용 동의"
  },
  {
    id: "check_privacy",
    require: true,
    label: "결제대행 서비스 이용약관 (주)KG이니시스"
  },
];

export const brandStoryData = [
  {
    id: 0,
    imgsrc: aerobiey06,
    like: false,
    likeCount: 0,
    shopName: "Aerobiey",
    modelName: "[3Color] AB-201",
    productName: "화이트 아크 체어",
    price: 3230000,
    colors: ["#CBC6C3"]
  },
  {
    id: 1,
    imgsrc: aerobiey07,
    like: false,
    likeCount: 0,
    shopName: "Aerobiey",
    modelName: "[23s] AB-102",
    productName: "클래식 무드등",
    price: 1430000,
    colors: ["#192552", "#CBC6C3"]
  },
  {
    id: 2,
    imgsrc: aerobiey08,
    like: false,
    likeCount: 0,
    shopName: "Aerobiey",
    modelName: "[1Color] AB-205",
    productName: "1인용 릴렉스 체어",
    price: 3230000,
    colors: ["#1B464D", "#FADA5F"]
  },
  {
    id: 3,
    imgsrc: aerobiey09,
    like: false,
    likeCount: 0,
    shopName: "Aerobiey",
    modelName: "[23s] AB-392",
    productName: "에어로비 4인용 쇼파",
    price: 1430000,
    colors: ["#292522"]
  },
]

export const editorPickData = [
  {
    id: 0,
    imgsrc: henredn04,
    like: false,
    likeCount: 0,
    shopName: "Henredn",
    modelName: "[3Color] AB-201",
    productName: "그린쇼파",
    price: 3230000,
    colors: ["#CBC6C3"]
  },
  {
    id: 1,
    imgsrc: henredn05,
    like: false,
    likeCount: 0,
    shopName: "Henredn",
    modelName: "[23s] AB-102",
    productName: "1인 클래식 의자",
    price: 1430000,
    colors: ["#192552", "#CBC6C3"]
  },
  {
    id: 2,
    imgsrc: henredn06,
    like: false,
    likeCount: 0,
    shopName: "Henredn",
    modelName: "[1Color] AB-205",
    productName: "1인용 릴렉스 체어",
    price: 3230000,
    colors: ["#1B464D", "#FADA5F"]
  },
  {
    id: 3,
    imgsrc: henredn07,
    like: false,
    likeCount: 0,
    shopName: "Henredn",
    modelName: "[23s] AB-392",
    productName: "에어로비 4인용 쇼파",
    price: 1430000,
    colors: ["#292522"]
  },
]

export const monthlyPostData = [
  {
    id: 0,
    imgsrc: umasqu04,
    like: false,
    likeCount: 0,
    shopName: "Umasqu",
    modelName: "[3Color] AB-201",
    productName: "그린쇼파",
    price: 3230000,
    colors: ["#CBC6C3"]
  },
  {
    id: 1,
    imgsrc: umasqu05,
    like: false,
    likeCount: 0,
    shopName: "Umasqu",
    modelName: "[23s] AB-102",
    productName: "1인 클래식 의자",
    price: 1430000,
    colors: ["#192552", "#CBC6C3"]
  },
  {
    id: 2,
    imgsrc: umasqu06,
    like: false,
    likeCount: 0,
    shopName: "Umasqu",
    modelName: "[1Color] AB-205",
    productName: "1인용 릴렉스 체어",
    price: 3230000,
    colors: ["#1B464D", "#FADA5F"]
  },
  {
    id: 3,
    imgsrc: umasqu07,
    like: false,
    likeCount: 0,
    shopName: "Umasqu",
    modelName: "[23s] AB-392",
    productName: "에어로비 4인용 쇼파",
    price: 1430000,
    colors: ["#292522"]
  },
]

export const shopProductData = [
  {
    id: 0,
    imgsrc: sofa01,
    like: true,
    likeCount: 556,
    shopName: "One Rain",
    modelName: "[3Color] OR-205",
    productName: "원레인 4인용 소파",
    price: 3230000,
    colors: ["#1B464D", "#192552", "#4414CD"]
  },
  {
    id: 1,
    imgsrc: table01,
    like: false,
    likeCount: 556,
    shopName: "ALFDEN",
    modelName: "[23Series] AD-388",
    productName: "알프든 옐로우소파",
    price: 1430000,
    colors: ["#BC862E"]
  },
  {
    id: 2,
    imgsrc: chair03,
    like: false,
    likeCount: 556,
    shopName: "James Lee",
    modelName: "[23Series] JL-309",
    productName: "제임스리 아트체어",
    price: 230000,
    colors: ["#A55555", "#494A4C", "#192552"]
  },
  {
    id: 3,
    imgsrc: chair02,
    like: false,
    likeCount: 556,
    shopName: "HC ART",
    modelName: "[21Series] HCA-309",
    productName: "HC 아트 우든체어",
    price: 130000,
    colors: ["#A55555", "#494A4C", "#192552"]
  },
]

export const shopJson = {
  "funiture":[
    {
      "id": "menu_table",
      "category": "테이블",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "다이닝테이블",
          "url": "/",
        },
        {
          "category": "데스크",
          "url": "/",
        },
        {
          "category": "사이드테이블",
          "url": "/",
        },
        {
          "category": "소반",
          "url": "/",
        },
        {
          "category": "소파테이블",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_chair",
      "category": "의자",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "다이닝체어",
          "url": "/",
        },
        {
          "category": "라운지체어",
          "url": "/",
        },
        {
          "category": "스툴",
          "url": "/",
        },
        {
          "category": "바체어",
          "url": "/",
        },
        {
          "category": "벤치",
          "url": "/",
        },
        {
          "category": "펫체어",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_sofa",
      "category": "소파",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "1인용",
          "url": "/",
        },
        {
          "category": "2-3인용",
          "url": "/",
        },
        {
          "category": "4인용",
          "url": "/",
        },
        {
          "category": "모듈",
          "url": "/",
        },
        {
          "category": "풋스툴",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_closet",
      "category": "수납장",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "낮은거실장",
          "url": "/",
        },
        {
          "category": "책장",
          "url": "/",
        },
        {
          "category": "서랍장",
          "url": "/",
        },
        {
          "category": "장식장",
          "url": "/",
        },
        {
          "category": "화장대",
          "url": "/",
        },
        {
          "category": "옷장",
          "url": "/",
        },
        {
          "category": "협탁",
          "url": "/",
        },
        {
          "category": "트롤리",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_bed",
      "category": "침대",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "침대모듈",
          "url": "/",
        },
        {
          "category": "s",
          "url": "/",
        },
        {
          "category": "ss",
          "url": "/",
        },
        {
          "category": "D",
          "url": "/",
        },
        {
          "category": "Q",
          "url": "/",
        },
        {
          "category": "K",
          "url": "/",
        },
        {
          "category": "LK-",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_lights",
      "category": "조명",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "펜던트",
          "url": "/",
        },
        {
          "category": "벽조명",
          "url": "/",
        },
        {
          "category": "스탠드",
          "url": "/",
        },
        {
          "category": "테이블조명",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_homedeco",
      "category": "홈데코",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "인테리어소품",
          "url": "/",
        },
        {
          "category": "월데코",
          "url": "/",
        },
        {
          "category": "다이닝",
          "url": "/",
        },
        {
          "category": "거울",
          "url": "/",
        },
        {
          "category": "행거",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_kids",
      "category": "키즈",
      "children": [
        {
          "category": "전체",
          "url": "/",
        },
        {
          "category": "옷,서랍장",
          "url": "/",
        },
        {
          "category": "책,서랍장",
          "url": "/",
        },
        {
          "category": "침대",
          "url": "/",
        },
      ]
    },
  ],
  "alphabet": [
    {
      "id": "menu_A",
      "category": "A",
      "children": [
        {
          "category": "Aarikka",
          "url": "/",
        },
        {
          "category": "Adea",
          "url": "/",
        },
        {
          "category": "Adi",
          "url": "/",
        },
        {
          "category": "Aerobie",
          "url": "/",
        },
        {
          "category": "AGO",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_B",
      "category": "B",
      "children": [
        {
          "category": "B-LINE",
          "url": "/",
        },
        {
          "category": "B&B Italia",
          "url": "/",
        },
        {
          "category": "Bacsac",
          "url": "/",
        },
        {
          "category": "BALERI ITALIA",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_C",
      "category": "C",
      "children": [
        {
          "category": "Caccaro",
          "url": "/",
        },
        {
          "category": "CACOON",
          "url": "/",
        },
        {
          "category": "calligaris",
          "url": "/",
        },
        {
          "category": "Cane-Line",
          "url": "/",
        },
        {
          "category": "cappellini",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_D",
      "category": "D",
      "children": [
        {
          "category": "Danese Milano",
          "url": "/",
        },
        {
          "category": "DANTE",
          "url": "/",
        },
        {
          "category": "davide groppi",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_E",
      "category": "E",
      "children": [
        {
          "category": "EBB&FLOW",
          "url": "/",
        },
        {
          "category": "EcoSmart Fire",
          "url": "/",
        },
        {
          "category": "edra",
          "url": "/",
        },
      ]
    },
    {
      "id": "menu_F",
      "category": "F",
      "children": [
        {
          "category": "Fabbian",
          "url": "/",
        },
        {
          "category": "Fabula Living",
          "url": "/",
        },
        {
          "category": "Fast",
          "url": "/",
        },
        {
          "category": "Fatboy",
          "url": "/",
        },
      ]
    },
  ]
}

export const styleBrandProductData = [
  {
    id: 0,
    imgsrc: alfdn01,
    like: true,
    likeCount: 556,
    shopName: "ALFDN",
    modelName: "[SET] AD-012",
    productName: "알프든 테이블 도자기 세트",
    price: 230000,
    colors: ["#CBC6C3"]
  },
  {
    id: 1,
    imgsrc: alfdn02,
    like: false,
    likeCount: 556,
    shopName: "ALFDN",
    modelName: "[23Series] AD-316",
    productName: "알프든 체어",
    price: 1230000,
    colors: ["#282629", "#CBC6C3"]
  },
  {
    id: 2,
    imgsrc: alfdn03,
    like: false,
    likeCount: 556,
    shopName: "ALFDN",
    modelName: "[SET] AD-322",
    productName: "Wooden Table, Chair set",
    price: 830000,
    colors: ["#3F2916", "#D67531"]
  },
  {
    id: 3,
    imgsrc: alfdn04,
    like: false,
    likeCount: 556,
    shopName: "ALFDN",
    modelName: "[23Series] AD-405",
    productName: "Basic sofa",
    price: 2430000,
    colors: ["#192552", "#A6A8A7"]
  },
]

export const homeStylingProductData = [
  {
    id: 0,
    imgsrc: onerain03,
    shopName: "ONERAIN",
    modelName: "[23 Series] OR-512",
    productName: "원레인 더티 러그",
    price: 230000
  },
  {
    id: 1,
    imgsrc: chair02,
    shopName: "ONERAIN",
    modelName: "[23 Series] OR-309",
    productName: "원레인 아트체어",
    price: 230000
  },
  {
    id: 2,
    imgsrc: table01,
    shopName: "ONERAIN",
    modelName: "[23 Series] OR-555",
    productName: "원레인 테이블",
    price: 420000
  },
]

export const monthlyPostSwiperData = [
  {
    imageUrl: aerobiey01,
    title: "따듯한 가구",
    description: "일상속에서 자연스러운 아름다움을 느껴보세요. - 23s",
    author: "umasqu - 23s",
  },
  {
    imageUrl: styleBanner06,
    title: "유니크한 가구",
    description: "포인트를 더해 집 안에 생기를 불어 넣어보세요.",
    author: "NIXO - 23s",
  },
  {
    imageUrl: styleBanner07,
    title: "모던한 가구",
    description: "카페테라스에 모던하면서 시크한 매력을 더하다.",
    author: "SAKIRO - 23s",
  },
];

export const videoSwiperData = [
  {
    id: 1,
    imgsrc: brandCollectionVideo01,
  },
  {
    id: 2,
    imgsrc: brandCollectionVideo02,
  },
  {
    id: 3,
    imgsrc: brandCollectionVideo01,
  },
  {
    id: 4,
    imgsrc: brandCollectionVideo02,
  },
  {
    id: 5,
    imgsrc: brandCollectionVideo01,
  },
]

export const brandRakingSwiperData = [
  {
    id: 0,
    imgsrc: onerainBrand,
    shopName: "ONERAIN",
    productList: [
      {
        id: 0,
        imgsrc: onerain01,
        shopName: "ONERAIN",
        modelName: "[22Series] OR-210",
        productName: "원레인 그랑프리 체어",
      },
      {
        id: 1,
        imgsrc: onerain02,
        shopName: "ONERAIN",
        modelName: "[23Series] OR-110",
        productName: "원레인 우든 테이블",
      },
    ],
  },
  {
    id: 1,
    imgsrc: onerainBrand,
    shopName: "ONERAIN",
    productList: [
      {
        id: 0,
        imgsrc: onerain01,
        shopName: "ONERAIN",
        modelName: "[22Series] OR-210",
        productName: "원레인 그랑프리 체어2",
      },
      {
        id: 1,
        imgsrc: onerain02,
        shopName: "ONERAIN",
        modelName: "[23Series] OR-110",
        productName: "원레인 우든 테이블2",
      },
    ],
  },
  {
    id: 3,
    imgsrc: onerainBrand,
    shopName: "ONERAIN",
    productList: [
      {
        id: 0,
        imgsrc: onerain01,
        shopName: "ONERAIN",
        modelName: "[22Series] OR-210",
        productName: "원레인 그랑프리 체어3",
      },
      {
        id: 1,
        imgsrc: onerain02,
        shopName: "ONERAIN",
        modelName: "[23Series] OR-110",
        productName: "원레인 우든 테이블3",
      },
    ],
  },
]

export const styleBannerData = [
  {
    img: styleBanner03,
    newItem: true,
    brandName: "Redon",
    discription: "혁신적인 가구 디자인의 한획을 긋다",
  },
  {
    img: styleBanner04,
    newItem: true,
    brandName: "Pianoa",
    discription: "가구의 예술성과 실용성을 더했다",
  },
  {
    img: styleBanner05,
    newItem: true,
    brandName: "Rily",
    discription: "미니멀과 모던함의 조화를 이루다",
  },
  {
    img: styleBanner01,
    newItem: true,
    brandName: "One Rain",
    discription: "미니멀과 디테일의 균형적인 가구",
  },
]

export const styleTabPanelStyleTypes = [
  {avatar: modern, name: "모던", discription: "혼자 사는 자취방"},
  {avatar: northernEU, name: "북유럽", discription: "아이들이 좋아하는"},
  {avatar: classic, name: "클래식", discription: "잔잔한 바이브"},
  {avatar: casual, name: "캐주얼", discription: "에너지 넘치는"},
  {avatar: cen, name: "첸", discription: "고요함이 좋다면"},
  {avatar: plant, name: "플랜테리어", discription: "생기를 불어넣는"},
  {avatar: minimal, name: "미니멀", discription: "깔끔함이 최고"},
  {avatar: romantic, name: "로맨틱", discription: "달달한 신혼"},
];