import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ProfileState,
  ProfileActions,
  BabyProfile,
} from "../_models/profile.interface";

const testProfile: ProfileState = {
  kakao_name: "test",
  child_seq: "1",
  child_name: "테스트",
  // child_picture: "https://picsum.photos/400",
  child_picture: "",
};

interface ProfileStore {
  profile: ProfileState;
}

const storeProfile = create(
  persist<ProfileStore & ProfileActions>(
    (set) => ({
      profile: testProfile,
      setName: (kakaoname: string) =>
        set((prev) => ({
          profile: {
            ...prev.profile,
            kakao_name: kakaoname,
          },
        })),
      setProfileInfo: (profile: BabyProfile) =>
        set((prev) => ({
          profile: {
            kakao_name: prev.profile.kakao_name,
            child_seq: profile.child_seq,
            child_name: profile.child_name,
            child_picture: profile.child_picture,
          },
        })),
      removeProfileInfo: () => set({}),
    }),
    {
      name: "profile",
      getStorage: () => sessionStorage,
    },
  ),
);

export default storeProfile;
