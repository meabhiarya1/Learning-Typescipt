interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken?: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const abhishek: Admin = {
  dbId: 22,
  email: "s@gmaail.com",
  userId: 221,
  role: "admin",
  startTrail: () => {
    return "return";
  },
  getCoupon: (name: "abhi10", off: 10) => {
    return 10;
  },
};
