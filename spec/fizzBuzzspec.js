describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should test for divisibility by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  });

  it("should test for indivisibilty by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(5)).toBeFalsy();
  });

  it("should test for divisibility by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBeTruthy();
  });

  it("should test for indivisibilty by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(9)).toBeFalsy();
  });

  it("should test for divisibility by both 3 and 5", function() {
    expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBeTruthy();
  });

  it("should test for indivisibility by both 3 and 5", function(){
    expect(fizzbuzz.isDivisibleByThreeAndFive(16)).toBeFalsy();
  });

  it("should return fizz if number is divisible by 3", function(){
    expect(fizzbuzz.output(3)).toBe('fizz');
  });

  it("should return buzz if number is divisible by 5", function() {
    expect(fizzbuzz.output(5)).toBe('buzz');
  });
});
