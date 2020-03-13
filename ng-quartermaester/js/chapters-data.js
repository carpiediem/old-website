var chapters = [
  {title:"AGOT-0: Prologue",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Prologue"},  // 0
  {title:"AGOT-1: Bran I",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_1"},
  {title:"AGOT-2: Catelyn I",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_2"},
  {title:"AGOT-3: Daenerys I",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_3"},
  {title:"AGOT-4: Eddard I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_4"},
  {title:"AGOT-5: Jon I",         awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_5"},
  {title:"AGOT-6: Catelyn II",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_6"},
  {title:"AGOT-7: Arya I",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_7"},
  {title:"AGOT-8: Bran II",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_8"},
  {title:"AGOT-9: Tyrion I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_9"},
  {title:"AGOT-10: Jon II",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_10"},
  {title:"AGOT-11: Daenerys II",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_11"},
  {title:"AGOT-12: Eddard II",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_12"},
  {title:"AGOT-13: Tyrion II",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_13"},
  {title:"AGOT-14: Catelyn III",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_14"},
  {title:"AGOT-15: Sansa I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_15"},
  {title:"AGOT-16: Eddard III",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_16"},
  {title:"AGOT-17: Bran III",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_17"},
  {title:"AGOT-18: Catelyn IV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_18"},
  {title:"AGOT-19: Jon III",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_19"},
  {title:"AGOT-20: Eddard IV",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_20"},  // 20
  {title:"AGOT-21: Tyrion III",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_21"},
  {title:"AGOT-22: Arya II",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_22"},
  {title:"AGOT-23: Daenerys III", awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_23"},
  {title:"AGOT-24: Bran IV",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_24"},
  {title:"AGOT-25: Eddard V",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_25"},
  {title:"AGOT-26: Jon IV",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_26"},
  {title:"AGOT-27: Eddard VI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_27"},
  {title:"AGOT-28: Catelyn V",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_28"},
  {title:"AGOT-29: Sansa II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_29"},
  {title:"AGOT-30: Eddard VII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_30"},
  {title:"AGOT-31: Tyrion IV",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_31"},
  {title:"AGOT-32: Arya III",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_32"},
  {title:"AGOT-33: Eddard VIII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_33"},
  {title:"AGOT-34: Catelyn VI",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_34"},
  {title:"AGOT-35: Eddard IX",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_35"},
  {title:"AGOT-36: Daenerys IV",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_36"},
  {title:"AGOT-37: Bran V",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_37"},
  {title:"AGOT-38: Tyrion V",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_38"},
  {title:"AGOT-39: Eddard X",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_39"},
  {title:"AGOT-40: Catelyn VII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_40"},  // 40
  {title:"AGOT-41: Jon V",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_41"},
  {title:"AGOT-42: Tyrion VI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_42"},
  {title:"AGOT-43: Eddard XI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_43"},
  {title:"AGOT-44: Sansa III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_44"},
  {title:"AGOT-45: Eddard XII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_45"},
  {title:"AGOT-46: Daenerys V",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_46"},
  {title:"AGOT-47: Eddard XIII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_47"},
  {title:"AGOT-48: Jon VI",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_48"},
  {title:"AGOT-49: Eddard XIV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_49"},
  {title:"AGOT-50: Arya IV",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_50"},
  {title:"AGOT-51: Sansa IV",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_51"},
  {title:"AGOT-52: Jon VII",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_52"},
  {title:"AGOT-53: Bran VI",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_53"},
  {title:"AGOT-54: Daenerys VI",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_54"},
  {title:"AGOT-55: Catelyn VIII", awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_55"},
  {title:"AGOT-56: Tyrion VII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_56"},
  {title:"AGOT-57: Sansa V",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_57"},
  {title:"AGOT-58: Eddard XV",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_58"},
  {title:"AGOT-59: Catelyn IX",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_59"},
  {title:"AGOT-60: Jon VIII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_60"},  // 60
  {title:"AGOT-61: Daenerys VII", awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_61"},
  {title:"AGOT-62: Tyrion VIII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_62"},
  {title:"AGOT-63: Catelyn X",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_63"},
  {title:"AGOT-64: Daenerys VIII",awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_64"},
  {title:"AGOT-65: Arya V",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_65"},
  {title:"AGOT-66: Bran VII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_66"},
  {title:"AGOT-67: Sansa VI",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_67"},
  {title:"AGOT-68: Daenerys IX",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_68"},
  {title:"AGOT-69: Tyrion IX",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_69"},
  {title:"AGOT-70: Jon IX",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_70"},
  {title:"AGOT-71: Catelyn XI",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_71"},
  {title:"AGOT-72: Daenerys X",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_71"},
  {title:"ACOK-0: Prologue",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Prologue"},
  {title:"ACOK-1: Arya I",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_1"},
  {title:"ACOK-2: Sansa I",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_2"},
  {title:"ACOK-3: Tyrion I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_3"},
  {title:"ACOK-4: Bran I",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_4"},
  {title:"ACOK-5: Arya II",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_5"},
  {title:"ACOK-6: Jon I",         awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_6"},
  {title:"ACOK-7: Catelyn I",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_7"},  // 80
  {title:"ACOK-8: Tyrion II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_8"},
  {title:"ACOK-9: Arya III",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_9"},
  {title:"ACOK-10: Davos I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_10"},
  {title:"ACOK-11: Theon I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_11"},
  {title:"ACOK-12: Daenerys I",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_12"},
  {title:"ACOK-13: Jon II",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_13"},
  {title:"ACOK-14: Arya IV",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_14"},
  {title:"ACOK-15: Tyrion III",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_15"},
  {title:"ACOK-16: Bran II",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_16"},
  {title:"ACOK-17: Tyrion IV",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_17"},
  {title:"ACOK-18: Sansa II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_18"},
  {title:"ACOK-19: Arya V",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_19"},
  {title:"ACOK-20: Tyrion V",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_20"},
  {title:"ACOK-21: Bran III",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_21"},
  {title:"ACOK-22: Catelyn II",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_22"},
  {title:"ACOK-23: Jon III",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_23"},
  {title:"ACOK-24: Theon II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_24"},
  {title:"ACOK-25: Tyrion VI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_25"},
  {title:"ACOK-26: Arya VI",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_26"},
  {title:"ACOK-27: Daenerys II",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_27"},  // 100
  {title:"ACOK-28: Bran IV",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_28"},
  {title:"ACOK-29: Tyrion VII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_29"},
  {title:"ACOK-30: Arya VII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_30"},
  {title:"ACOK-31: Catelyn III",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_31"},
  {title:"ACOK-32: Sansa III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_32"},
  {title:"ACOK-33: Catelyn IV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_33"},
  {title:"ACOK-34: Jon IV",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_34"},
  {title:"ACOK-35: Bran V",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_35"},
  {title:"ACOK-36: Tyrion VIII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_36"},
  {title:"ACOK-37: Theon III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_37"},
  {title:"ACOK-38: Arya VIII",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_38"},
  {title:"ACOK-39: Catelyn V",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_39"},
  {title:"ACOK-40: Daenerys III", awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_40"},
  {title:"ACOK-41: Tyrion IX",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_41"},
  {title:"ACOK-42: Davos II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_42"},
  {title:"ACOK-43: Jon V",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_43"},
  {title:"ACOK-44: Tyrion X",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_44"},
  {title:"ACOK-45: Catelyn VI",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_45"},
  {title:"ACOK-46: Bran VI",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_46"},
  {title:"ACOK-47: Arya IX",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_47"},  // 120
  {title:"ACOK-48: Daenerys IV",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_48"},
  {title:"ACOK-49: Tyrion XI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_49"},
  {title:"ACOK-50: Theon IV",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_50"},
  {title:"ACOK-51: Jon VI",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_51"},
  {title:"ACOK-52: Sansa IV",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_52"},
  {title:"ACOK-53: Jon VII",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_53"},
  {title:"ACOK-54: Tyrion XII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_54"},
  {title:"ACOK-55: Catelyn VII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_55"},
  {title:"ACOK-56: Theon V",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_56"},
  {title:"ACOK-57: Sansa V",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_57"},
  {title:"ACOK-58: Davos III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_58"},
  {title:"ACOK-59: Tyrion XIII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_59"},
  {title:"ACOK-60: Sansa VI",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_60"},
  {title:"ACOK-61: Tyrion XIV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_61"},
  {title:"ACOK-62: Sansa VII",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_62"},
  {title:"ACOK-63: Daenerys V",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_63"},
  {title:"ACOK-64: Arya X",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_64"},
  {title:"ACOK-65: Sansa VIII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_65"},
  {title:"ACOK-66: Theon VI",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_66"},
  {title:"ACOK-67: Tyrion XV",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_67"},  // 140
  {title:"ACOK-68: Jon VIII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_68"},
  {title:"ACOK-69: Bran VII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Clash_of_Kings-Chapter_69"},
  {title:"ASOS-0: Prologue",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Prologue"},
  {title:"ASOS-1: Jaime I",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_1"},
  {title:"ASOS-2: Catelyn I",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_2"},
  {title:"ASOS-3: Arya I",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_3"},
  {title:"ASOS-4: Tyrion I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_4"},
  {title:"ASOS-5: Davos I",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_5"},
  {title:"ASOS-6: Sansa I",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_6"},
  {title:"ASOS-7: Jon I",         awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_7"},
  {title:"ASOS-8: Daenerys I",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_8"},
  {title:"ASOS-9: Bran I",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_9"},
  {title:"ASOS-10: Davos II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_10"},
  {title:"ASOS-11: Jaime II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_11"},
  {title:"ASOS-12: Tyrion II",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_12"},
  {title:"ASOS-13: Arya II",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_13"},
  {title:"ASOS-14: Catelyn II",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_14"},
  {title:"ASOS-15: Jon II",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_15"},
  {title:"ASOS-16: Sansa II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_16"},
  {title:"ASOS-17: Arya III",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_17"},  // 160
  {title:"ASOS-18: Samwell I",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_18"},
  {title:"ASOS-19: Tyrion III",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_19"},
  {title:"ASOS-20: Catelyn III",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_20"},
  {title:"ASOS-21: Jaime III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_21"},
  {title:"ASOS-22: Arya IV",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_22"},
  {title:"ASOS-23: Daenerys II",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_23"},
  {title:"ASOS-24: Bran II",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_24"},
  {title:"ASOS-25: Davos III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_25"},
  {title:"ASOS-26: Jon III",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_26"},
  {title:"ASOS-27: Daenerys III", awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_27"},
  {title:"ASOS-28: Sansa III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_28"},
  {title:"ASOS-29: Arya V",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_29"},
  {title:"ASOS-30: Jon IV",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_30"},
  {title:"ASOS-31: Jaime IV",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_31"},
  {title:"ASOS-32: Tyrion IV",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_32"},
  {title:"ASOS-33: Samwell II",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_33"},
  {title:"ASOS-34: Arya VI",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_34"},
  {title:"ASOS-35: Catelyn IV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_35"},
  {title:"ASOS-36: Davos IV",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_36"},
  {title:"ASOS-37: Jaime V",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_37"},  // 180
  {title:"ASOS-38: Tyrion V",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_38"},
  {title:"ASOS-39: Arya VII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_39"},
  {title:"ASOS-40: Bran III",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_40"},
  {title:"ASOS-41: Jon V",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_41"},
  {title:"ASOS-42: Daenerys IV",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_42"},
  {title:"ASOS-43: Arya VIII",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_43"},
  {title:"ASOS-44: Jaime VI",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_44"},
  {title:"ASOS-45: Catelyn V",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_45"},
  {title:"ASOS-46: Samwell III",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_46"},
  {title:"ASOS-47: Arya IX",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_47"},
  {title:"ASOS-48: Jon VI",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_48"},
  {title:"ASOS-49: Catelyn VI",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_49"},
  {title:"ASOS-50: Arya X",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_50"},
  {title:"ASOS-51: Catelyn VII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_51"},
  {title:"ASOS-52: Arya XI",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_52"},
  {title:"ASOS-53: Tyrion VI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_53"},
  {title:"ASOS-54: Davos V",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_54"},
  {title:"ASOS-55: Jon VII",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_55"},
  {title:"ASOS-56: Bran IV",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_56"},
  {title:"ASOS-57: Daenerys V",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_57"},  // 200
  {title:"ASOS-58: Tyrion VII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_58"},
  {title:"ASOS-59: Sansa IV",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_59"},
  {title:"ASOS-60: Tyrion VIII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_60"},
  {title:"ASOS-61: Sansa V",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_61"},
  {title:"ASOS-62: Jaime VII",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_62"},
  {title:"ASOS-63: Davos VI",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_63"},
  {title:"ASOS-64: Jon VIII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_64"},
  {title:"ASOS-65: Arya XII",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_65"},
  {title:"ASOS-66: Tyrion IX",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_66"},
  {title:"ASOS-67: Jaime VIII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_67"},
  {title:"ASOS-68: Sansa VI",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_68"},
  {title:"ASOS-69: Jon IX",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_69"},
  {title:"ASOS-70: Tyrion X",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_70"},
  {title:"ASOS-71: Daenerys VI",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_71"},
  {title:"ASOS-72: Jaime IX",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_72"},
  {title:"ASOS-73: Jon X",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_73"},
  {title:"ASOS-74: Arya XIII",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_74"},
  {title:"ASOS-75: Samwell IV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_75"},
  {title:"ASOS-76: Jon XI",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_76"},
  {title:"ASOS-77: Tyrion XI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_77"},  // 220
  {title:"ASOS-78: Samwell V",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_78"},
  {title:"ASOS-79: Jon XII",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_79"},
  {title:"ASOS-80: Sansa VII",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Chapter_80"},
  {title:"ASOS-81: Epilogue",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Storm_of_Swords-Epilogue"},
  {title:"AFFC-0: Prologue",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Prologue"},
  {title:"AFFC-1: The Prophet",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_1"},
  {title:"AFFC-2: The Captain Of Guards",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_2"},
  {title:"AFFC-3: Cersei I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_3"},
  {title:"AFFC-4: Brienne I",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_4"},
  {title:"AFFC-5: Samwell I",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_5"},
  {title:"AFFC-6: Arya I",        awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_6"},
  {title:"AFFC-7: Cersei II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_7"},
  {title:"AFFC-8: Jaime I",       awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_8"},
  {title:"AFFC-9: Brienne II",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_9"},
  {title:"AFFC-10: Sansa I",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_10"},
  {title:"AFFC-11: Kraken's Daughter",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_11"},
  {title:"AFFC-12: Cersei III",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_12"},
  {title:"AFFC-13: The Soiled Knight",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_13"},
  {title:"AFFC-14: Brienne III",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_14"},
  {title:"AFFC-15: Samwell II",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_15"},  // 240
  {title:"AFFC-16: Jaime II",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_16"},
  {title:"AFFC-17: Cersei IV",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_17"},
  {title:"AFFC-18: The Iron Captain",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_18"},
  {title:"AFFC-19: The Drowned Man",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_19"},
  {title:"AFFC-20: Brienne IV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_20"},
  {title:"AFFC-21: The Queenmaker",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_21"},
  {title:"AFFC-22: Arya II",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_22"},
  {title:"AFFC-23: Alayne I",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_23"},
  {title:"AFFC-24: Cersei V",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_24"},
  {title:"AFFC-25: Brienne V",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_25"},
  {title:"AFFC-26: Samwell III",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_26"},
  {title:"AFFC-27: Jaime III",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_27"},
  {title:"AFFC-28: Cersei VI",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_28"},
  {title:"AFFC-29: The Reaver",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_29"},
  {title:"AFFC-30: Jaime IV",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_30"},
  {title:"AFFC-31: Brienne VI",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_31"},
  {title:"AFFC-32: Cersei VII",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_32"},
  {title:"AFFC-33: Jaime V",      awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_33"},
  {title:"AFFC-34: Cat Of The Canals",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_34"},
  {title:"AFFC-35: Samwell IV",   awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_35"},  // 260
  {title:"AFFC-36: Cersei VIII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_36"},
  {title:"AFFC-37: Brienne VII",  awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_37"},
  {title:"AFFC-38: Jaime VI",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_38"},
  {title:"AFFC-39: Cersei IX",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_39"},
  {title:"AFFC-40: Princess in the Tower",awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_40"},
  {title:"AFFC-41: Alayne II",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_41"},
  {title:"AFFC-42: Brienne VIII", awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_42"},
  {title:"AFFC-43: Cersei X",     awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_43"},
  {title:"AFFC-44: Jaime VII",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_44"},
  {title:"AFFC-45: Samwell V",    awoiaf:"http://awoiaf.westeros.org/index.php/A_Feast_for_Crows-Chapter_45"},
  {title:"ADWD-0: Prologue",      awoiaf:"http://awoiaf.westeros.org/index.php/Prologue_(A_Dance_with_Dragons)"},
  {title:"ADWD-1: Tyrion I",      awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-2: Daenerys I",    awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-3: Jon I",         awoiaf:"http://awoiaf.westeros.org/index.php/Jon_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-4: Bran I",        awoiaf:"http://awoiaf.westeros.org/index.php/Bran_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-5: Tyrion II",     awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_II_(A_Dance_with_Dragons)"},
  {title:"ADWD-6: The Merchant's Man",awoiaf:"http://awoiaf.westeros.org/index.php/The_Merchant%27s_Man_(A_Dance_with_Dragons)"},
  {title:"ADWD-7: Jon II",        awoiaf:"http://awoiaf.westeros.org/index.php/Jon_II_(A_Dance_with_Dragons)"},
  {title:"ADWD-8: Tyrion III",    awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_III_(A_Dance_with_Dragons)"},
  {title:"ADWD-9: Davos I",       awoiaf:"http://awoiaf.westeros.org/index.php/Davos_I_(A_Dance_with_Dragons)"},  // 280
  {title:"ADWD-10: Jon III",      awoiaf:"http://awoiaf.westeros.org/index.php/Jon_III_(A_Dance_with_Dragons)"},
  {title:"ADWD-11: Daenerys II",  awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_II_(A_Dance_with_Dragons)"},
  {title:"ADWD-12: Reek I",       awoiaf:"http://awoiaf.westeros.org/index.php/Reek_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-13: Bran II",      awoiaf:"http://awoiaf.westeros.org/index.php/Bran_II_(A_Dance_with_Dragons)"},
  {title:"ADWD-14: Tyrion IV",    awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_IV_(A_Dance_with_Dragons)"},
  {title:"ADWD-15: Davos II",     awoiaf:"http://awoiaf.westeros.org/index.php/Davos_II_(A_Dance_with_Dragons)"},
  {title:"ADWD-16: Daenerys III", awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_III_(A_Dance_with_Dragons)"},
  {title:"ADWD-17: Jon IV",       awoiaf:"http://awoiaf.westeros.org/index.php/Jon_IV_(A_Dance_with_Dragons)"},
  {title:"ADWD-18: Tyrion V",     awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_V_(A_Dance_with_Dragons)"},
  {title:"ADWD-19: Davos III",    awoiaf:"http://awoiaf.westeros.org/index.php/Davos_III_(A_Dance_with_Dragons)"},
  {title:"ADWD-20: Reek II",      awoiaf:"http://awoiaf.westeros.org/index.php/Reek_II_(A_Dance_with_Dragons)"},
  {title:"ADWD-21: Jon V",        awoiaf:"http://awoiaf.westeros.org/index.php/Jon_V_(A_Dance_with_Dragons)"},
  {title:"ADWD-22: Tyrion VI",    awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_VI_(A_Dance_with_Dragons)"},
  {title:"ADWD-23: Daenerys IV",  awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_IV_(A_Dance_with_Dragons)"},
  {title:"ADWD-24: The Lost Lord",awoiaf:"http://awoiaf.westeros.org/index.php/The_Lost_Lord_(A_Dance_with_Dragons)"},
  {title:"ADWD-25: The Windblown",awoiaf:"http://awoiaf.westeros.org/index.php/The_Windblown_(A_Dance_with_Dragons)"},
  {title:"ADWD-26: The Wayward Bride",awoiaf:"http://awoiaf.westeros.org/index.php/The_Wayward_Bride_(A_Dance_with_Dragons)"},
  {title:"ADWD-27: Tyrion VII",   awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_VII_(A_Dance_with_Dragons)"},
  {title:"ADWD-28: Jon VI",       awoiaf:"http://awoiaf.westeros.org/index.php/Jon_VI_(A_Dance_with_Dragons)"},
  {title:"ADWD-29: Davos IV",     awoiaf:"http://awoiaf.westeros.org/index.php/Davos_IV_(A_Dance_with_Dragons)"},                // 300
  {title:"ADWD-30: Daenerys V",   awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_V_(A_Dance_with_Dragons)"},
  {title:"ADWD-31: Melisandre I", awoiaf:"http://awoiaf.westeros.org/index.php/Melisandre_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-32: Reek III",     awoiaf:"http://awoiaf.westeros.org/index.php/Reek_III_(A_Dance_with_Dragons)"},
  {title:"ADWD-33: Tyrion VIII",  awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_VIII_(A_Dance_with_Dragons)"},
  {title:"ADWD-34: Bran III",     awoiaf:"http://awoiaf.westeros.org/index.php/Bran_III_(A_Dance_with_Dragons)"},
  {title:"ADWD-35: Jon VII",      awoiaf:"http://awoiaf.westeros.org/index.php/Jon_VII_(A_Dance_with_Dragons)"},
  {title:"ADWD-36: Daenerys VI",  awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_VI_(A_Dance_with_Dragons)"},
  {title:"ADWD-37: Prince of Winterfell",awoiaf:"http://awoiaf.westeros.org/index.php/The_Prince_of_Winterfell_(A_Dance_with_Dragons)"},
  {title:"ADWD-38: The Watcher",  awoiaf:"http://awoiaf.westeros.org/index.php/The_Watcher_(A_Dance_with_Dragons)"},
  {title:"ADWD-39: Jon VIII",     awoiaf:"http://awoiaf.westeros.org/index.php/Jon_VIII_(A_Dance_with_Dragons)"},
  {title:"ADWD-40: Tyrion IX",    awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_IX_(A_Dance_with_Dragons)"},
  {title:"ADWD-41: The Turncloak",awoiaf:"http://awoiaf.westeros.org/index.php/The_Turncloak_(A_Dance_with_Dragons)"},
  {title:"ADWD-42: The King's Prize",awoiaf:"http://awoiaf.westeros.org/index.php/The_King's_Prize_(A_Dance_with_Dragons)"},
  {title:"ADWD-43: Daenerys VII", awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_VII_(A_Dance_with_Dragons)"},
  {title:"ADWD-44: Jon IX",       awoiaf:"http://awoiaf.westeros.org/index.php/Jon_IX_(A_Dance_with_Dragons)"},
  {title:"ADWD-45: The Blind Girl",awoiaf:"http://awoiaf.westeros.org/index.php/The_Blind_Girl_(A_Dance_with_Dragons)"},
  {title:"ADWD-46: A Ghost In Winterfell",awoiaf:"http://awoiaf.westeros.org/index.php/A_Ghost_in_Winterfell_(A_Dance_with_Dragons)"},
  {title:"ADWD-47: Tyrion X",     awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_X_(A_Dance_with_Dragons)"},
  {title:"ADWD-48: Jaime I",      awoiaf:"http://awoiaf.westeros.org/index.php/Jaime_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-49: Jon X",        awoiaf:"http://awoiaf.westeros.org/index.php/Jon_X_(A_Dance_with_Dragons)"},                   // 320
  {title:"ADWD-50: Daenerys VIII",awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_VIII_(A_Dance_with_Dragons)"},
  {title:"ADWD-51: Theon I",      awoiaf:"http://awoiaf.westeros.org/index.php/Theon_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-52: Daenerys IX",  awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_IX_(A_Dance_with_Dragons)"},
  {title:"ADWD-53: Jon XI",       awoiaf:"http://awoiaf.westeros.org/index.php/Jon_XI_(A_Dance_with_Dragons)"},
  {title:"ADWD-54: Cersei I",     awoiaf:"http://awoiaf.westeros.org/index.php/Cersei_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-55: The Queensguard",awoiaf:"http://awoiaf.westeros.org/index.php/The_Queensguard_(A_Dance_with_Dragons)"},
  {title:"ADWD-56: The Iron Suitor",awoiaf:"http://awoiaf.westeros.org/index.php/The_Iron_Suitor_(A_Dance_with_Dragons)"},
  {title:"ADWD-57: Tyrion XI",    awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_XI_(A_Dance_with_Dragons)"},
  {title:"ADWD-58: Jon XII",      awoiaf:"http://awoiaf.westeros.org/index.php/Jon_XII_(A_Dance_with_Dragons)"},
  {title:"ADWD-59: Discarded Knight",awoiaf:"http://awoiaf.westeros.org/index.php/The_Discarded_Knight_(A_Dance_with_Dragons)"},
  {title:"ADWD-60: The Spurned Suitor",awoiaf:"http://awoiaf.westeros.org/index.php/The_Spurned_Suitor_(A_Dance_with_Dragons)"},
  {title:"ADWD-61: The Griffin Reborn",awoiaf:"http://awoiaf.westeros.org/index.php/The_Griffin_Reborn_(A_Dance_with_Dragons)"},
  {title:"ADWD-62: The Sacrifice",awoiaf:"http://awoiaf.westeros.org/index.php/The_Sacrifice_(A_Dance_with_Dragons)"},
  {title:"ADWD-63: Victarion I",  awoiaf:"http://awoiaf.westeros.org/index.php/Victarion_I_(A_Dance_with_Dragons)"},
  {title:"ADWD-64: The Ugly Little Girl",awoiaf:"http://awoiaf.westeros.org/index.php/The_Ugly_Little_Girl_(A_Dance_with_Dragons)"},
  {title:"ADWD-65: Cersei II",    awoiaf:"http://awoiaf.westeros.org/index.php/Cersei_II_(A_Dance_with_Dragons)"},
  {title:"ADWD-66: Tyrion XII",   awoiaf:"http://awoiaf.westeros.org/index.php/Tyrion_XII_(A_Dance_with_Dragons)"},
  {title:"ADWD-67: The Kingbreaker",awoiaf:"http://awoiaf.westeros.org/index.php/The_Kingbreaker_(A_Dance_with_Dragons)"},
  {title:"ADWD-68: The Dragontamer",awoiaf:"http://awoiaf.westeros.org/index.php/The_Dragontamer_(A_Dance_with_Dragons)"},
  {title:"ADWD-69: Jon XIII",     awoiaf:"http://awoiaf.westeros.org/index.php/Jon_XIII_(A_Dance_with_Dragons)"},               // 340
  {title:"ADWD-70: The Queen's Hand",awoiaf:"http://awoiaf.westeros.org/index.php/The_Queen%27s_Hand_(A_Dance_with_Dragons)"},
  {title:"ADWD-71: Daenerys X",   awoiaf:"http://awoiaf.westeros.org/index.php/Daenerys_X_(A_Dance_with_Dragons)"},
  {title:"ADWD-72: Epilogue",     awoiaf:"http://awoiaf.westeros.org/index.php/Epilogue_(A_Dance_with_Dragons)"},
  {title:"TWOW-?: Theon I",       awoiaf:"http://awoiaf.westeros.org/index.php/Theon_I_(The_Winds_of_Winter)"}                 //344
];