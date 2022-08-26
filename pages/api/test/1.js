export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        answers: [
          {
            answer_id: 300543,
            order: 1,
            is_answered: false,
            content: "만",
          },
          {
            answer_id: 300544,
            order: 2,
            is_answered: false,
            content: "에",
          },
          {
            answer_id: 300545,
            order: 3,
            is_answered: false,
            content: "도",
          },
          {
            answer_id: 300546,
            order: 4,
            is_answered: false,
            content: "를",
          },
        ],
        contents:
          "<table> <tbody> <tr> <td> <p>저는 베트남 사람입니다. 흐엉 씨(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) 베트남 사람입니다.</p> </td> </tr> </tbody> </table>",
        group_question:
          "<span>(&nbsp; &nbsp; &nbsp; &nbsp; )에 들어갈 가장 알맞은 것을 고르십시오.</span>",
        group_question_end_no: null,
        group_question_start_no: null,
        image_url: "",
        is_combo_no_audio: false,
        is_first_question: false,
        is_group_no: false,
        is_last_question: false,
        question: "<span>㉠에 들어갈 알맞은 말을 고르십시오.</span>",
        question_fix_id: { qb_question_id: 300069 },
        question_id: 35782,
        question_no: 1,
        score: 10,
        section: "Reading",
        section_time: 11,
      },
    ],
  });
}
