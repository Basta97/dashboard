import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserProvider } from './service/user-provider/user-provider';

export const authGuard: CanActivateFn = (route, state) => {
  const userProvider = inject(UserProvider);
  return userProvider.user() !== null;
};
