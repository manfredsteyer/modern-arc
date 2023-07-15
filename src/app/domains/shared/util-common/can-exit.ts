import { Observable } from 'rxjs';

export interface CanExit {
  canExit(): Observable<boolean>;
}
