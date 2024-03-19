package com.a102.andy.config;

import com.a102.andy.auth.ReferrerCheckInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
    }

//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(new ReferrerCheckInterceptor());
//    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/auth/login/**")
                .allowedOrigins("*")
                .allowedHeaders("Authorization", "content-type")
                .allowedMethods("GET", "POST", "DELETE", "PATCH", "OPTIONS");
    }

}
