import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static url= environment.BACKEND_URL;
  static signupEndPoint = "/signUp"
  static loginEndPoint="/signIn"
  static addslotEndPoint="/addSlot"  
  static briarKey="Hamada__"  
  static getDoctorSlots="/viewSlots"
  static getDoctors="/getDoctors"
  static reserveApt = "/reserveSlot"
  static getAvailableSlots="/viewAvailableSlots"
  static getReservations = "/getReservations"
  static cancelReservations = "/cancelReservation"
  static updateReservation = "/updateReservation"
}
