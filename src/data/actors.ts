export type Actor = {
  slug: string;
  name: string;
  koreanName: string;
  initials: string;
  color: string;
};

export const actors: Actor[] = [
  { slug: "kim-soo-hyun", name: "Kim Soo-hyun", koreanName: "김수현", initials: "KS", color: "#75849B" },
  { slug: "kim-ji-won", name: "Kim Ji-won", koreanName: "김지원", initials: "KJ", color: "#B9909C" },
  { slug: "hyun-bin", name: "Hyun Bin", koreanName: "현빈", initials: "HB", color: "#807B91" },
  { slug: "son-ye-jin", name: "Son Ye-jin", koreanName: "손예진", initials: "SY", color: "#B78985" },
  { slug: "gong-yoo", name: "Gong Yoo", koreanName: "공유", initials: "GY", color: "#8591A0" },
  { slug: "kim-go-eun", name: "Kim Go-eun", koreanName: "김고은", initials: "KG", color: "#A98596" },
  { slug: "kim-tae-ri", name: "Kim Tae-ri", koreanName: "김태리", initials: "KT", color: "#A8898B" },
  { slug: "nam-joo-hyuk", name: "Nam Joo-hyuk", koreanName: "남주혁", initials: "NJ", color: "#788B9C" },
  { slug: "park-eun-bin", name: "Park Eun-bin", koreanName: "박은빈", initials: "PE", color: "#A6A2BB" },
  { slug: "kang-tae-oh", name: "Kang Tae-oh", koreanName: "강태오", initials: "KT", color: "#828C91" },
  { slug: "song-hye-kyo", name: "Song Hye-kyo", koreanName: "송혜교", initials: "SH", color: "#A98C92" },
  { slug: "lee-do-hyun", name: "Lee Do-hyun", koreanName: "이도현", initials: "LD", color: "#8B879A" },
  { slug: "ryu-seung-ryong", name: "Ryu Seung-ryong", koreanName: "류승룡", initials: "RS", color: "#777E8D" },
  { slug: "han-hyo-joo", name: "Han Hyo-joo", koreanName: "한효주", initials: "HH", color: "#A9808D" },
  { slug: "jo-jung-suk", name: "Jo Jung-suk", koreanName: "조정석", initials: "JJ", color: "#878E89" },
  { slug: "jeon-mi-do", name: "Jeon Mi-do", koreanName: "전미도", initials: "JM", color: "#A79389" },
  { slug: "lee-byung-hun", name: "Lee Byung-hun", koreanName: "이병헌", initials: "LB", color: "#797B86" },
  { slug: "iu", name: "IU", koreanName: "아이유", initials: "IU", color: "#AA8FA4" },
  { slug: "park-bo-gum", name: "Park Bo-gum", koreanName: "박보검", initials: "PB", color: "#8490A3" },
  { slug: "byeon-woo-seok", name: "Byeon Woo-seok", koreanName: "변우석", initials: "BW", color: "#758A9A" },
  { slug: "kim-hye-yoon", name: "Kim Hye-yoon", koreanName: "김혜윤", initials: "KH", color: "#B5919E" },
  { slug: "ju-ji-hoon", name: "Ju Ji-hoon", koreanName: "주지훈", initials: "JJ", color: "#75838F" },
  { slug: "choo-young-woo", name: "Choo Young-woo", koreanName: "추영우", initials: "CY", color: "#8995A2" },
];

export const getActor = (slug: string) => actors.find((actor) => actor.slug === slug);
