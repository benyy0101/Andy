import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ProfileState,
  ProfileActions,
  BabyProfile,
} from "../_models/profile.interface";

const testProfile: ProfileState = {
  kakaoName: "test",
  childSeq: "1",
  childName: "테스트",
  childPicture: "https://picsum.photos/400",
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
            kakaoName: kakaoname,
          },
        })),
      setProfileInfo: (profile: BabyProfile) =>
        set((prev) => ({
          profile: {
            kakaoName: prev.profile.kakaoName,
            childSeq: profile.childSeq,
            childName: profile.childName,
            childPicture: profile.childPicture,
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
