export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        contents: "",
        group_question:
          "<span>다음 대화를 잘 듣고 이어질 수 있는 말을 고르십시오.</span>",
        group_question_end_no: null,
        group_question_start_no: null,
        image_url: "",
        is_combo_no_audio: false,
        is_first_question: false,
        is_group_no: false,
        is_last_question: false,
        question: "",
        question_fix_id: { qb_question_id: 302526 },
        qb_question_id: 302526,
        question_id: 35898,
        question_no: "3",
        score: 9,
        section: "Listening",
        section_time: 14,
        answers: [
          {
            answer_id: 303023,
            order: 1,
            is_answered: false,
            content: "다음 회의는 안 갈 거예요.2",
          },
          {
            answer_id: 303024,
            order: 2,
            is_answered: false,
            content: "정문 옆에 있는 식당이에요.2",
          },
          {
            answer_id: 303025,
            order: 3,
            is_answered: false,
            content: "이번 주에 만나면 좋겠어요.2",
          },
          {
            answer_id: 303026,
            order: 4,
            is_answered: false,
            content: "그 장소에는 가지 않을 거예요.2",
          },
        ],
      },
    ],
  });
}
