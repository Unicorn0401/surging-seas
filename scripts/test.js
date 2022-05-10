/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/*var typed = new Typed('.b', {
    stringsElement: '.a',
    typeSpeed: 60
  });*/




  const scale = [0, 1, 2, 3, 5, 7];
const range = {
  0: {
    src: "https://public.flourish.studio/uploads/35777/8a94fbf1-684e-4277-86ea-03b076dffa17.png",
    text:
      "Remember, this is how the Sea Level Map of Boston Looked Like in 2000.",
    rangeText: "Boston Sea Level in 2000"
  },

  1: {
    src: "https://public.flourish.studio/uploads/35777/9e46d9a1-f513-4092-8636-0f6df41a3378.png",
    text:
      "Under a high-emisions scenario, we should surpass this sea level rise in the Boston area by 2040. Even if we drastically curb emissions, we could see 0.98 feet of sea level rise by then.",
    rangeText: "Sea Level Rise 1 Foot"
  },

  2: {
    src: "https://public.flourish.studio/uploads/35777/bd6114ff-e9c6-4f21-a6ac-f129c7c238b7.png",
    text:
      "Under a high-emission scenario, we could surpass this sea level rise in the Boston area by 2060. If we drastically curb emission, we could still surpass it by 2090.",
    rangeText: "Sea Level Rise 2 Feet"
  },

  3: {
    src: "	https://public.flourish.studio/uploads/35777/32690cc6-b5a1-4011-8390-6269583ff1cc.png",
    text:
      "Under a high-emission scenario, we could surpass this sea level rise in the Boston area by 2070. If we drastically curb emission, we could likely avert this level of sea level rise this century.",
    rangeText: "Sea-level rise: 3 feet"
  },

  5: {
    src: "https://public.flourish.studio/uploads/35777/123a9a8f-3d9b-4221-bcf8-a8c4e4598df9.png",
    text:
      "Under a high-emission scenario, we could surpass this sea level rise in the Boston area by 2090. If we drastically curb emission, we can likely avoid this level of sea level rise this century.",
    rangeText: "Sea-level rise: 5 feet"
  },

  7: {
    src: "https://public.flourish.studio/uploads/35777/8a16c474-c2ce-4b80-9208-e6b72a56c2d0.png",
    text:
      "Under a high-emission scenario, we could see 6.4 feet of sea level rise in the Boston area by 210. If we drastically curb emission, we can likely avoid this level of sea level rise this century",
    rangeText: "Sea-level rise: 7 feet"
  },
};

slideVal = 1;

$("#slider").on("input change", function () {
  slideVal = $("#slider").val();
  update();
});

update();

function update() {
  $(".tours img").attr("src", range[slideVal].src);
  $(".tours h3").text(range[slideVal].rangeText);
  $(".tours p").text(range[slideVal].text);
  $(".tours span").text(range[slideVal].rangeText);
}