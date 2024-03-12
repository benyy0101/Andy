package com.a102f.lighthouse.Member.Dto;

import lombok.Data;
import org.springframework.stereotype.Component;
@Component
@Data
public class LoginMemberDto {

    private String member_id;

    private String member_password;

}
