package com.a102f.lighthouse.app.Member.Service;

import com.a102f.lighthouse.app.Member.Controller.Dto.OAuthMemberInfoResponse;
import com.a102f.lighthouse.app.Member.Controller.Dto.OauthResponse;

public interface OauthService {
    OauthResponse getAccessToken(String authenticationCode);
    OAuthMemberInfoResponse getMemberInfo(String accessToken);


}
