import { Breadcrumbs } from "@mantine/core";
import { useContext } from "react";
import { RepoIcon } from "@icons";
import { buttons as repoButtons } from "utils/repo-header-buttons";
import { buttons as navButtons } from "utils/repo-nav-buttons";
import { Button, useDefaultStyles, Link } from "components";
import { LoadingContext } from "context/loading-context";
import useStyles from "./Repo.styles";

const Repo = ({ pathname }: { pathname: string }) => {
  const { classes, cx } = useStyles();
  const { defaultClasses } = useDefaultStyles();
  const context = useContext(LoadingContext);
  const paths = `/home${pathname}`.split(/\/+/g).filter(Boolean);
  const basePath = `/home${pathname}${pathname.endsWith("/") ? "" : "/"}`;

  return (
    <div className={classes.control}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <RepoIcon className={classes.icon} width="16" height="16" fill="var(--icon-color)" />
          <Breadcrumbs
            styles={{
              separator: { margin: "0 4px", fontSize: "20px", color: "var(--icon-color)" },
              breadcrumb: {
                color: "var(--link-color) !important",
                fontSize: "20px !important",
                maxWidth: "150px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
              root: { marginRight: "4px" },
            }}
          >
            {paths.map((item, i, a) => {
              const href = `${basePath}${"../".repeat(a.length - i - 1)}`;
              return (
                <span key={item}>
                  <Link
                    href={href}
                    label={i === 0 ? "Home" : item}
                    isLast={i === a.length - 1}
                    onClick={(e) => {
                      if (href !== basePath && i !== a.length - 1) context.setIsLoading(true);
                      else e.preventDefault();
                    }}
                    className={classes.anchor}
                  />
                </span>
              );
            })}
          </Breadcrumbs>
        </div>
        <div className={classes.topRight}>
          {repoButtons.map((button) => (
            <Button
              key={button.label}
              label={button.label}
              shouldHideOnMd={button.shouldHideOnMd}
              styleButton
              icon={button.icon}
            />
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        <ul className={classes.ul}>
          {navButtons.map((button) => (
            <li
              key={button.href}
              className={cx(
                classes.li,
                button?.selected ? classes.selected : "",
                button.shouldHideOnMd ? defaultClasses.hidden : ""
              )}
            >
              <a className={cx(classes.a)} href={button.href}>
                <button.icon className={classes.icon} width="16" height="16" fill="var(--icon-color)" />
                {button.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Repo;
