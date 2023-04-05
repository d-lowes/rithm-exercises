it('should calculate monthly rate', function () {
  expect(calcMonthlyPayment(45000, 30, 5)).toEqual(241.57);
});
