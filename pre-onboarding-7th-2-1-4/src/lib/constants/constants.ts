export const PALLETTE = {
  BLACK: "#000000",
  GREY: "#D9D9D9",
  BLUE: "#0094FF",
  WHITE: "#FFFFFF"
} as const;

export const MOCK_UP = [
  {
    id: 1,
    startDate: "2022-11-02T10:42:09.438Z",
    createdAt: "2022-11-02T10:42:09.438Z",
    attribute: {
      brand: "현대",
      name: "아반떼 CN7",
      segment: "C",
      fuelType: "gasoline",
      imageUrl: "https://interview.platdev.net/avantecn7.png"
    },
    amount: 600000,
    insurance: [
      {
        name: "대인",
        description: "무한"
      },
      {
        name: "대물",
        description: "10억"
      }
    ],
    additionalProducts: [
      {
        name: "하이파킹 주차권",
        amount: 150000
      }
    ]
  },
  {
    id: 2,
    startDate: "2022-11-02T10:42:09.438Z",
    createdAt: "2022-11-02T10:42:09.438Z",
    attribute: {
      brand: "현대",
      name: "아이오닉 5",
      segment: "SUV",
      fuelType: "ev",
      imageUrl: "https://interview.platdev.net/ioniq5.png"
    },
    amount: 900000,
    insurance: [
      {
        name: "대인",
        description: "무한"
      },
      {
        name: "대물",
        description: "10억"
      }
    ],
    additionalProducts: [
      {
        name: "하이파킹 주차권",
        amount: 150000
      },
      {
        name: "전기차 충전권",
        amount: 180000
      }
    ]
  },
  {
    id: 3,
    startDate: "2022-11-02T10:42:09.438Z",
    createdAt: "2022-11-02T10:42:09.438Z",
    attribute: {
      brand: "기아",
      name: "EV6",
      segment: "SUV",
      fuelType: "ev",
      imageUrl: "https://interview.platdev.net/ev6.png"
    },
    amount: 800000,
    insurance: [
      {
        name: "대인",
        description: "무한"
      },
      {
        name: "대물",
        description: "10억"
      }
    ],
    additionalProducts: []
  },
  {
    id: 4,
    startDate: "2022-11-02T10:42:09.438Z",
    createdAt: "2022-11-02T10:42:09.438Z",
    attribute: {
      brand: "기아",
      name: "K5 DL3",
      segment: "D",
      fuelType: "gasoline",
      imageUrl: "https://interview.platdev.net/k5.png"
    },
    amount: 700000,
    insurance: [
      {
        name: "대인",
        description: "무한"
      },
      {
        name: "대물",
        description: "10억"
      }
    ],
    additionalProducts: [
      {
        name: "하이파킹 주차권",
        amount: 150000
      }
    ]
  },
  {
    id: 5,
    startDate: "2022-11-02T10:42:09.438Z",
    createdAt: "2022-11-02T10:42:09.438Z",
    attribute: {
      brand: "Tesla",
      name: "Model 3",
      segment: "C",
      fuelType: "ev",
      imageUrl: "https://interview.platdev.net/model3.png"
    },
    amount: 1000000,
    insurance: [
      {
        name: "대인",
        description: "무한"
      },
      {
        name: "대물",
        description: "10억"
      }
    ],
    additionalProducts: [
      {
        name: "하이파킹 주차권",
        amount: 150000
      }
    ]
  }
];

export const SEGMENT = {
  ALL: "전체",
  E: "대형",
  D: "중형",
  C: "소형",
  SUV: "SUV"
};

export const FUELTYPE = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드"
};
