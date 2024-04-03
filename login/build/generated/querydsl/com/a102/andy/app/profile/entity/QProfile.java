package com.a102.andy.app.profile.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QProfile is a Querydsl query type for Profile
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QProfile extends EntityPathBase<Profile> {

    private static final long serialVersionUID = 816846861L;

    public static final QProfile profile = new QProfile("profile");

    public final com.a102.andy.common.QBaseEntity _super = new com.a102.andy.common.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    //inherited
    public final BooleanPath isDeleted = _super.isDeleted;

    public final StringPath memberId = createString("memberId");

    public final DatePath<java.time.LocalDate> profileBirthday = createDate("profileBirthday", java.time.LocalDate.class);

    public final StringPath profileGender = createString("profileGender");

    public final StringPath profileName = createString("profileName");

    public final StringPath profileNickname = createString("profileNickname");

    public final StringPath profilePicture = createString("profilePicture");

    public final NumberPath<Integer> profileSeq = createNumber("profileSeq", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public QProfile(String variable) {
        super(Profile.class, forVariable(variable));
    }

    public QProfile(Path<? extends Profile> path) {
        super(path.getType(), path.getMetadata());
    }

    public QProfile(PathMetadata metadata) {
        super(Profile.class, metadata);
    }

}

