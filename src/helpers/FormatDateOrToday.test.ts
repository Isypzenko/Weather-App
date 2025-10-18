import { formatDateOrToday, dateFormater, getFormatDate } from "./date-helper";
describe("Format day", () => {
  it("Should return formatted day string", () => {
    expect(formatDateOrToday(1231249)).toBe("15.01.1970");
  });
  it("Should return day with format 00-00 etc", () => {
    expect(getFormatDate(17)).toBe("17");
    expect(getFormatDate(7)).toBe("07");
  });
  it("Should return object with day, month, year, hours, minutes", () => {
    const timestamp = 1231249;
    const result = dateFormater(timestamp);
    expect(result).toEqual({
      day: 15,
      month: 0,
      year: 1970,
      hours: 9,
      minutes: 0,
    });
  });
});
