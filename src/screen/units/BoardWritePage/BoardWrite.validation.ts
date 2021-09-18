import * as yup from "yup";
export const schema = yup.object().shape({
  title: yup.string().required("내용을 입력해주세요"),
  startDate: yup.string().required("내용을 입력해주세요"),
  endDate: yup.string().required("내용을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  area: yup.string().required("내용을 입력해주세요"),
  city: yup.string().required("내용을 입력해주세요"),
  country: yup.string().required("내용을 입력해주세요"),

});
