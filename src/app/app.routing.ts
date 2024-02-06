import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Componente importado para renderização
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { SobreComponent } from "./sobre/sobre.component";

const APP_ROUTES: Routes = [
 { path: '', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'sobre', component: SobreComponent },
 { path: 'cursos', component: CursosComponent }
];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forRoot(APP_ROUTES);
// forRoot => Usado para as rotas chaves, rotas principaos
// forChild => Usado para adicionar rotas adicionais em módulos secundários ou de funcionalidades específicas. Cada módulo que contém suas próprias rotas usa forChild
