it("should call console.log one time", () => {

    const consoleLogBak = console.log;
    console.log = jest.fn();
    require("../");
    expect(console.log).toHaveBeenCalledTimes(1);
    console.log = consoleLogBak;
});
