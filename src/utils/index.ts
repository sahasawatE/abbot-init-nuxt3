// import { Buffer } from "buffer";
import moment from "moment";
// import { Crypt } from "../plugins/utils/enc";

export const utils = {
  FormatDate(date: string, displayTime: boolean = false) {
    const format = displayTime ? "DD-MM-YYYY HH:mm:ss" : "DD/MM/YYYY";
    return moment(date).add("543", "years").format(format);
  },

  dateView(date: string, format: string = "YYYY-MM-DDTHH:mm:ss"): string {
    const format_date = moment(date, format)
      .add(543, "years")
      .format("DD/MM/YYYY");
    return format_date;
  },

  dateViewFull(date: string, format: string = "YYYY-MM-DDTHH:mm:ss"): string {
    const format_date = moment(date, format)
      .add(543, "years")
      .format("DD/MM/YYYY HH:mm");
    return format_date;
  },

  NumOnly: (data: string) => {
    return data.replace(/[^0-9]+/g, "");
  },

  dateInput(date: string) {
    if (!date || date === "") return "";

    const num = this.NumOnly(date);
    const l_num = num.length;
    let return_date = "";

    if (l_num >= 0 && l_num <= 2) {
      return_date = num;
    } else if (l_num >= 2 && l_num <= 4) {
      return_date = num.replace(/(\d{2})/, "$1/");
    } else if (l_num >= 4 && l_num <= 8) {
      return_date = num.replace(/(\d{2})(\d{2})/, "$1/$2/");
    }

    return return_date;
  },

  PidView: (id: string) => {
    if (!id || id === "") return "";
    const onlyNums = id.replace(/[^0-9]+/g, "");
    let pid = "";
    if (onlyNums.length >= 0 && onlyNums.length <= 1) {
      pid = onlyNums;
    } else if (onlyNums.length > 1 && onlyNums.length <= 5) {
      pid = onlyNums.replace(/(\d{1})/, "$1-");
    } else if (onlyNums.length > 5 && onlyNums.length <= 10) {
      pid = onlyNums.replace(/(\d{1})(\d{4})/, "$1-$2-");
    } else if (onlyNums.length > 10 && onlyNums.length <= 12) {
      pid = onlyNums.replace(/(\d{1})(\d{4})(\d{5})/, "$1-$2-$3-");
    } else if (onlyNums.length > 12) {
      pid = onlyNums.replace(/(\d{1})(\d{4})(\d{5})(\d{2})/, "$1-$2-$3-$4-");
    } else if (onlyNums.length > 14) {
      pid = onlyNums.replace(
        /(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})/,
        "$1-$2-$3-$4-$5-",
      );
    }
    if (pid.length > 13) pid = pid.substring(0, 17);
    return pid;
  },

  MobileView: (value: string) => {
    if (!value || value === "") return "";

    const onlyNums = value.replace(/[^0-9]+/g, "");
    let phone = "";
    if (onlyNums.length >= 0 && onlyNums.length <= 1) {
      phone = onlyNums;
    } else if (onlyNums.length > 1 && onlyNums.length <= 3) {
      phone = onlyNums.replace(/(\d{3})/, "$1-");
    } else if (onlyNums.length > 3 && onlyNums.length <= 5) {
      phone = onlyNums.replace(/(\d{3})(\d{3})/, "$1-$2-");
    } else if (onlyNums.length > 5 && onlyNums.length <= 10) {
      phone = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }

    return phone;
  },

  // enCvUrlParam(val: any) {
  //   const txt = typeof val === "object" ? JSON.stringify(val) : val;
  //   const b64 = Buffer.from(txt).toString("base64");
  //   const cryp = new Crypt({});
  //   const data = encodeURIComponent(cryp.encrypt(b64));

  //   return data;
  // },

  // deCvUrlParam(val: any) {
  //   const cryp = new Crypt({});
  //   const data = Buffer.from(
  //     cryp.decryptTxt(decodeURIComponent(val)),
  //     "base64",
  //   ).toString("utf8");
  //   return data;
  // },
};
