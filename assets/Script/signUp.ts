import { _decorator, Component, director, EditBox, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('signUp')
export class signUp extends Component {


    @property(Node)
     @property(Node)
    public signUp_UserName_EditBox: Node;
    @property(Node)
    public signUp_Password_EditBox: Node;
    @property(Node)
    public signUp_Name_EditBox: Node;


    start() {

    }

    update(deltaTime: number) {
        
    }


    public onClickSignUp() {
        console.log("onClickSignUp");

        let userName =  this.signUp_UserName_EditBox.getComponent(EditBox).string;
        let password = this.signUp_Password_EditBox.getComponent(EditBox).string;
        let name = this.signUp_Name_EditBox.getComponent(EditBox).string;
        console.log("onClickSignUp", userName, password, name);
        globalThis._loginScearnMgr._sendMessage("signUp", { userName: userName, password: password, name: name });

    }


    public onSignUpSuccess(data: any) {
        console.log("onSignUpSuccess", data);

        if (data.success) {
            globalThis._userInfo.userName = data.user.userName;

            director.loadScene("Level1");

        }


       
         else {
            console.error("SignUp failed:", data.message || "Unknown error");
        }
    }







}


