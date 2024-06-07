import { Entry } from "../components/HomePage/Testimonial";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanitizeEntries = (items: any[]): Entry[] => {
  return items.map((item) => {
    const sanitizedItem: Entry = {
      sys: {
        id: item.sys.id || "",
      },
      fields: {
        comment: item.fields.comment || "",
        userImage: {
          fields: {
            file: {
              url: item.fields.userImage.fields.file.url || "",
            },
          },
        },
        username: item.fields.username || "",
        createdAt: item.fields.createdAt || "",
      },
    };
    return sanitizedItem;
  });
};
