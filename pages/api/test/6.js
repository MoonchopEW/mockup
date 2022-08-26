export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        section: "Reading",
        section_time: 11,
        is_first_question: false,
        is_last_question: false,
        question_id: 35886,
        question_fix_id: {
          qb_question_id: 402759,
        },
        group_question_start_no: 14,
        group_question_end_no: 15,
        is_group_no: false,
        group_question: "<span>다음을 읽고 물음에 답하십시오.</span>",
        contents:
          "<p>&nbsp;저는 작년에 한국에 왔을 때 떡볶이를 처음 먹었습니다. 그런데 떡볶이가 너무 매워서 배가 (&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ㉠&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;). 배가 계속 아파서 여행이 즐겁지 않았습니다. 그래서 이번 한국 여행 때는 매운 음식을 먹지 않았습니다. 이번에는 배가 아프지 않아서 정말 좋았습니다.</p>",
        image_url: "",
        question_no: 6,
        question: "<span>㉠에 들어갈 알맞은 말을 고르십시오.</span>",
        score: 6,
        answers: [
          {
            answer_id: 305350,
            order: 1,
            is_answered: false,
            content: "아프면 안 됩니다2",
          },
          {
            answer_id: 305351,
            order: 2,
            is_answered: false,
            content: "아플까 걱정됩니다2",
          },
          {
            answer_id: 305352,
            order: 3,
            is_answered: false,
            content: "아플 것 같았습니다2",
          },
          {
            answer_id: 305353,
            order: 4,
            is_answered: false,
            content: "아프기 시작했습니다2",
          },
        ],
        audios: [
          {
            audio_url:
              "https://s3.ap-northeast-2.amazonaws.com/resource.ebridgehub.com/system/testprep/audio/L-14.mp3",
          },
          {
            audio_url:
              "https://s3.ap-northeast-2.amazonaws.com/resource.ebridgehub.com/system/testprep/audio/L-15.mp3",
          },
        ],
        is_combo_no_audio: false,
      },
    ],
  });
}
