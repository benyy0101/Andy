package com.a102.andy;

import com.a102.andy.image.service.S3UploadService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class S3UploadServiceTest {

    @Autowired
    private S3UploadService s3UploadService;

    @Autowired
    private ResourceLoader resourceLoader;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private String uploadedImageUrl;

    @BeforeEach
    void setUp() throws Exception {
        // 이미지 파일 로드
        Resource resource = resourceLoader.getResource("classpath:cat.png");
        MultipartFile multipartFile = new MockMultipartFile(
                "cat.png", "cat.png", "image/png", Files.readAllBytes(resource.getFile().toPath()));

        // S3에 이미지 업로드
        uploadedImageUrl = s3UploadService.saveFile(multipartFile, "testPath/");
    }

    @Test
    void saveFileTest() {
        // 업로드된 이미지 URL이 null이 아닌지 확인
        assertThat(uploadedImageUrl).isNotNull();

        // 업로드된 이미지의 URL을 콘솔에 출력
        System.out.println("업로드된 이미지 URL: " + uploadedImageUrl);
    }

//    @AfterEach
//    void tearDown() {
//        // 테스트에서 생성된 이미지 삭제
//        if (uploadedImageUrl != null) {
//            s3UploadService.deleteImage(uploadedImageUrl, "testPath/");
//        }
//    }
}
