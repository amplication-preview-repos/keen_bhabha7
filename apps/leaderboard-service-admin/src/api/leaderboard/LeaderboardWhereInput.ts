import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  name?: StringNullableFilter;
};
