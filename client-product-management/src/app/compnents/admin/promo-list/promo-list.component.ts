import { Component, OnInit, ViewChild } from '@angular/core';
import{ AdminService} from '../../../services/admin.service';
import {Promo} from '../../../model/promo';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
declare var $: any;

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit{
  promoList !: Array<Promo>;
  dataSource: MatTableDataSource<Promo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title', 'code', 'discount', 'action'];
  selectedPromo: Promo = new Promo();
  errorMessage !: string;
  infoMessage !: string;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort ;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.findAllPromo();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort ? this.sort : null;
    this.dataSource.paginator = this.paginator ? this.paginator : null;
  }

  findAllPromo(){
    this.adminService.findAllPromo().subscribe(data => {
      this.promoList = data;
      this.dataSource.data = data;
    });
  }

  createNewPromoRequest(){
    this.selectedPromo = new Promo();
    $('#promoModal').modal('show');
  }

  editPromoRequest(promo: Promo){
    this.selectedPromo = promo;
    $('#promoModal').modal('show');
  }

  savePromo(){
    if(!this.selectedPromo.id){
      this.createPromo();
    }else{
      this.updatePromo();
    }
  }

  createPromo(){
    this.adminService.createPromo(this.selectedPromo).subscribe(data => {
      this.promoList.push(data);
      this.dataSource = new MatTableDataSource(this.promoList);
      this.infoMessage = "Mission is completed";
      $('#promoModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  updatePromo(){
    this.adminService.updatePromo(this.selectedPromo).subscribe(data => {
      let itemIndex = this.promoList.findIndex(item => item.id == this.selectedPromo.id);
      this.promoList[itemIndex] = this.selectedPromo;
      this.dataSource = new MatTableDataSource(this.promoList);
      this.infoMessage = "Mission is completed";
      $('#promoModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  deletePromoRequest(promo: Promo){
    this.selectedPromo = promo;
    $('#deleteModal').modal('show');
  }

  deletePromo(){
    this.adminService.deletePromo(this.selectedPromo).subscribe(data => {
      let itemIndex = this.promoList.findIndex(item => item.id == this.selectedPromo.id);
      if(itemIndex !== -1){
        this.promoList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.promoList);
      this.infoMessage = "Mission is completed";
      $('#deleteModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

}
