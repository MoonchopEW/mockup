// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  
    res.header("Access-Control-Allow-Origin","*").status(200).json({
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