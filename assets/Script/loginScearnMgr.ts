import { _decorator, Component, director, EditBox, Node } from 'cc';
import { userInfo } from './userInfo';
const { ccclass, property } = _decorator;

@ccclass('loginScearnMgr')
export class loginScearnMgr extends Component {

    @property(Node)
    public my_EditBox: Node

    start() {
        globalThis.eventTarget.on("login_success", this.onLoginSuccess, this);
    }

    update(deltaTime: number) {

    }



    public onClickSignUp() {
        console.log("onClickSignUp")

        director.loadScene("SignUp");
    }



    public onClickLogin() {

        let str = this.my_EditBox.getComponent(EditBox).string
        let password = this.my_EditBox.getComponent(EditBox).string
        console.log(typeof str)
        console.log("onClickLogin", str);
        globalThis._loginScearnMgr._sendMessage("login", { userId: str, password: password });
    }

    public onLoginSuccess(data: any) {
        console.log("onLoginSuccess", data);

        if (data.success && data.user) {
            globalThis._userInfo.userId = data.user.userId;
            globalThis._userInfo.userName = data.user.userName;
            globalThis._userInfo.userHeadUrl = data.user.userHeadUrl;
            globalThis._userInfo.userRoomCards = data.user.userRoomCards;

            director.loadScene("HallScene");
        } else {
            console.error("Login999 failed:", data.message || "Unknown error");
            // You might want to show an error message to the user here
        }
    }








}


