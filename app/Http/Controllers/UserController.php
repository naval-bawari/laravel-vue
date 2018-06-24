<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    //
	public function index(){
		return User::all();		
	}
	public function addUser(Request $request){
		if($request->is_add_update == 'add'){
			User::create($request->except(['is_add_update']));
		}else{
			$user = User::find($request->id);
			$user->update($request->except(['is_add_update']));
		}
	}	
	public function deleteUser($user_id){
		User::find($user_id)->delete();
	}	
	public function viewUser($user_id){
		return User::find($user_id);
	}	
}
