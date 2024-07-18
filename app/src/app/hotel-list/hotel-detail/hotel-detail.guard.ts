import { CanActivateFn, Router} from '@angular/router';


export const hotelDetailGuard: CanActivateFn = (route, state) => {
  const router = new Router()
  console.log(route)
  const id = +route.url[1].path;
  if(isNaN(id) || id <= 0){
    alert('cette hotel n\'existe pas');

    router.navigate(['/hotels']);
    return false;
  }

  return true;
};

/**
 * Le role des Guards est de proteger les parametres d'url enfin que les users ne puis pas fais n'importe quoi
 * le params route de la fonction est un objet de type ActivedRouteSnapshot affiche les information sur l'url courant, le composant l'appelant, les data partager
 * le params route de la fonction est un objet de type RouterStateSnapshot qui affiche les information de la page dans lequel nous nous trouvons
*/