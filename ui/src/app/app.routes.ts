// Modules
import { Routes, RouterModule } from "@angular/router";

// Public Views
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { DiscordComponent }   from "./views/discord/discord.component";

// Auth views
import { LoginComponent } from "./views/login/login.component";

// Routing Guards
import { LoggedInGuard } from "./guards/logged-in.guard";
import { DevGuard }      from "./guards/dev.guard";

export const ROUTES: Routes = [
    // Main redirect
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Public Pages
    { path: 'home',    component: DashboardComponent },
    { path: 'discord', component: DiscordComponent   },

    { path: 'login', component: LoginComponent, canActivate: [DevGuard]},

    // Handle all other routes
    { path: '**', redirectTo: '' },
];