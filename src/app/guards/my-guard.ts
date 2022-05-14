import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

class TokenUsuario{}
class Permisos {
    canActivate(usuario: TokenUsuario) : boolean {
        //id: string
        return true;
    }
}

@Injectable()
export class MyGuard implements CanActivate {

    constructor(private permisos: Permisos, private usuario: TokenUsuario) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //, route.params.id
        return this.permisos.canActivate(this.usuario);
    }
}