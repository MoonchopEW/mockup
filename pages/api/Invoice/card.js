// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
    res.status(200).json({
      data: [
        { name: "이 달 예상 수입", icon: "CashIcon", amount: "70,000 원" },
        { name: "이 달 총 수업 시간", icon: "ClockIcon", amount: "15 시간" },
        {
          name: "이 달 총 수업 수",
          icon: "ClipboardCheckIcon",
          amount: "30 번",
        },
      ],
    });
  
}