package com.a102f.lighthouse.Member.Controller;


import com.a102f.lighthouse.Member.Dto.LoginMemberDto;
import com.a102f.lighthouse.Member.Service.OathMemberLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OathMemberLoginController {

    @Autowired
    private OathMemberLoginService oathMemberLoginService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginMemberDto loginMemberDto){
        System.out.println(loginMemberDto.toString());
        oathMemberLoginService.login(loginMemberDto);


        return ResponseEntity.ok(loginMemberDto);
    }


}
