import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthguardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    // const isAuthenticated = super.canActivate(context);

    // Verifica se a rota não começa com "/api/"
    const isApiRequest = request.path.startsWith('/api/');

    // Se for uma requisição para API e não houver token, retorna JSON de erro
    if (isApiRequest && !token) {
      return false; // Aguardará o tratamento no filtro de exceção
    }

    // Se não for uma requisição para API e não houver token, redireciona para a tela de login
    if (!isApiRequest && !token) {
      request.res.redirect('/auth/login');
      return false;
    }

    return false;
  }
}
