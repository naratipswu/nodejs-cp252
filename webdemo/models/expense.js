/**
 * Represents an Expense.
 * @class
 */
class Expense {
  /**
   * Create an expense object.
   * @constructor
   * @param {string|Date} date - The date of the transaction.
   * @param {number} income - The income amount.
   * @param {number} expense - The expense amount.
   * @param {string} detail - The description of the transaction.
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  /**
   * Create an ExpenseModel to hold a list of expenses.
   * @constructor
   */
  constructor() {
    this.expenses = [];
  }

  /**
   * Add an expense object to the list.
   * @param {Expense} expense - The expense object to add.
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Return all expense objects from the list.
   * @return {Expense[]} Array of expense objects.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate the total income.
   * @return {number} The sum of all income.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate the total expenses.
   * @return {number} The sum of all expenses.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate the remaining money (Income - Expense).
   * @return {number} The remaining money left.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };