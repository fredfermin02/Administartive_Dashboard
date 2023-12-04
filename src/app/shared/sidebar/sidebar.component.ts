import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserService } from 'src/app/services/user.service';
declare let $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  
  menuItems: any[] = [];
  public imgUrl = '';
  public usersName = '';

  constructor(private sideBarService: SidebarService, private userService: UserService) {
    this.menuItems = sideBarService.menu;
    this.imgUrl = userService.user.imageUrl;
    this.usersName = userService.user.usersName;
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Una vez que los elementos del menu están definidos, inicializo el plugin de jQuery para animarlos, // Esta instrucción está definida en el archivo custom.is, pero como el componente (sidebar) aun no existe cuando la app se inicia,
    // entonces no encunetra referencia alguna del elemento (para inicializarlo). por lo que su animación no existe
    $('#sidebarnav').AdminMenu()
  }
}
