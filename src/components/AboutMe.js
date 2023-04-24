import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomBox from "./CustomBox";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { t } from "@lingui/macro";

function AboutMe() {
  const projects = [
    {
      name: t`Portfolio website`,
      description: t`Description portfolio website`,
      link: "https://github.com/Llianae",
      type: "personal",
    },
    {
      name: t`Vacation planner website`,
      description: t`Description vacation planner website`,
      link: "https://github.com/Loqui67/site-vacances",
      type: "personal",
    },
    {
      name: t`Plateformer game`,
      description: t`Description plateformer game`,
      link: "https://github.com/Llianae/First-Plateformer",
      type: "personal",
    },
  ];

  return (
    <React.Fragment>
      <CustomBox centered responsive width={"100%"} marginBlock={"5vh"}>
        <Stack
          direction={"column"}
          spacing={8}
          alignItems={"center"}
          width={"100%"}
        >
          <CustomBox whiteBox centered width={"100%"}>
            <Stack direction={"column"} spacing={2} width={"100%"}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                gutterBottom
              >{t`About`}</Typography>

              <Divider
                orientation={"horinzontal"}
                flexItem
                display={{ xs: "none", sm: "block" }}
              />
              <Typography variant={"body1"} gutterBottom>
                {t`About me 1rst paragraph`}
              </Typography>
              <Typography variant={"body1"} gutterBottom>
                {t`About me 2nd paragraph`}
              </Typography>
              <Typography variant={"body1"} gutterBottom>
                {t`About me 3rd paragraph`}
              </Typography>
            </Stack>
          </CustomBox>

          <CustomBox whiteBox centered width={"100%"}>
            <Stack direction={"column"} spacing={2} width={"100%"}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                gutterBottom
                divider={false}
              >{t`My projects`}</Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                width={"100%"}
                justifyContent={"space-evenly"}
              >
                <CustomBox width={"100%"}>
                  <Stack direction={"column"} spacing={2} width={"100%"}>
                    <Divider>
                      <Typography divider={false} variant="h6">
                        {t`Projets personnels`}
                      </Typography>
                    </Divider>
                    <List>
                      {projects
                        .filter((project) => project.type === "personal")
                        .map((project) => (
                          <ListItem key={project.name}>
                            <ListItemText
                              primary={project.name}
                              secondary={project.description}
                              sx={{ width: "100%" }}
                            />
                            <Divider
                              orientation={"vertical"}
                              flexItem
                              sx={{ marginInline: 2 }}
                            />

                            <IconButton
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </ListItem>
                        ))}
                    </List>
                  </Stack>
                </CustomBox>
              </Stack>
            </Stack>
          </CustomBox>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

export default AboutMe;
