import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../auth.service";

@Injectable()
export  class  AuthorizationGuard  {
  constructor(private authService : AuthService,
              private router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorize = false;
    let authorizedRoles : string[] = route.data['roles'] ;
    let roles : string[] = this.authService.roles ;
    for (let i = 0; i < roles.length; i++) {
      if(authorizedRoles.includes(roles[i])){
        authorize = true;
      }
    }
    return authorize;
  }
}
