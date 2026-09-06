import type { Ref } from "vue";
import { ref } from "vue";
import { defineStore } from "pinia";
import type NewsEntry from "@/models/entities/home/NewsEntry";
import useDateTime from "@/utils/DateTime";

export default defineStore("news", () => {
  const dateTime = useDateTime();

  const all: Ref<NewsEntry[]> = ref([]);

  return {
    all,
    allValid: all.value.filter(it => {
      let ret = false;

      if (it.showUntil && dateTime.todayMidnight.value > it.showUntil)
        console.warn(
          `!! NewsEntry ${it.id} is not valid anymore and will be removed from the list !!`
        );
      else ret = true;

      return ret;
    })
  };
});
