import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseModel } from '../model/expensemodel';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  // Replace with your API endpoint

  http = inject(HttpClient);
  apiUrl = 'http://192.168.137.1:8080/api/Expenses';
  // GET all expenses
  getExpenses(): Observable<ExpenseModel[]> {
    return this.http.get<ExpenseModel[]>(this.apiUrl);
  }

  // GET single expense by id
  getExpenseById(id: number): Observable<ExpenseModel> {
    return this.http.get<ExpenseModel>(`${this.apiUrl}/${id}`);
  }

  // POST (Add new expense)
  addExpense(expense: ExpenseModel): Observable<ExpenseModel> {
    return this.http.post<ExpenseModel>(this.apiUrl, expense);
  }

  // PUT (Update existing expense)
  updateExpense(id: number, expense: ExpenseModel): Observable<ExpenseModel> {
    return this.http.put<ExpenseModel>(`${this.apiUrl}/${id}`, expense);
  }

  // DELETE
  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
