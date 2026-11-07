

"use client";

import { toast } from "sonner";
import { TBook } from "@/lib/dataType";
import { authClient } from "@/lib/auth-client";
import { type FormEvent, useState } from "react";
import { BookOpen, ImagePlus, Save, X } from "lucide-react";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

type EditBookFormProps = {
  book: TBook;
  setShowEdit: (value: boolean) => void;
  onBookUpdated?: (updatedBook: TBook) => void;
};

const EditBookForm = ({
  book,
  setShowEdit,
  onBookUpdated,
}: EditBookFormProps) => {
  
  const { data: session } = authClient.useSession();

  const userEmail = session?.user?.email;

  const [isSaving, setIsSaving] = useState(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // file image
  const uploadImage = async (file: File) => {
    const formData = new FormData();

    formData.append("image", file);



    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Image upload failed");
    }

    return data.imageUrl;
  };

  //update button handle
  const handleUpdateBook = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userEmail) {
      toast.error("Please login first");
      return;
    }

    const formData = new FormData(e.currentTarget);

    try {
      setIsSaving(true);

      let imageUrl = book.Image;

      if (selectedImage) {
        imageUrl = await uploadImage(selectedImage);
      }

      const updatedData = {
        Title: formData.get("title") as string,
        Author: formData.get("author") as string,
        Category: formData.get("category") as string,
        Image: imageUrl,
        Description: formData.get("description") as string,
        userEmail,
      };

      // get token from client 
      const token = await getTokenFromClient();


      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/update-book/${book._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization : `Bearer ${token}` ,
          },
          body: JSON.stringify(updatedData),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to update book");
        return;
      }

      const updatedBook = {
        ...book,
        ...updatedData,
      };

      onBookUpdated?.(updatedBook);

      toast.success("Book updated successfully!");
      setShowEdit(false);
    } catch (error) {
      console.log(error);
      toast.error("Book update unsuccessful!");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-5">
      {/* Modal */}
      <div className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-deep-olive/25 bg-[#FFFDF7] shadow-2xl dark:border-terracotta/30 dark:bg-card">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-deep-olive/10 blur-3xl dark:bg-terracotta/10" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-deep-olive/15 bg-[#E9EBDD]/60 px-5 py-4 dark:border-terracotta/20 dark:bg-terracotta/10 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-deep-olive/10 p-2.5 dark:bg-terracotta/15">
              <BookOpen
                className="text-deep-olive dark:text-terracotta"
                size={22}
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground">Edit Book</h2>
              <p className="text-xs text-muted-foreground">
                Update your book information
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowEdit(false)}
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-deep-olive/10 hover:text-foreground dark:hover:bg-terracotta/15"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <form
          onSubmit={handleUpdateBook}
          className="relative space-y-4 p-5 sm:p-6"
        >
          {/* Book Title and Author */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-foreground">
                Book Title
              </label>
              <input
                name="title"
                type="text"
                defaultValue={book.Title}
                placeholder="Enter book title"
                className="w-full rounded-xl border border-deep-olive/20 bg-white px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-deep-olive dark:border-terracotta/25 dark:bg-background"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-foreground">
                Author
              </label>

              <input
                type="text"
                name="author"
                defaultValue={book.Author}
                placeholder="Enter author name"
                className="w-full rounded-xl border border-deep-olive/20 bg-white px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-deep-olive dark:border-terracotta/25 dark:bg-background"
              />
            </div>
          </div>

          {/* Category and Total Copies */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-foreground">
                Category
              </label>

              <input
                name="category"
                type="text"
                defaultValue={book.Category}
                placeholder="Enter category"
                className="w-full rounded-xl border border-deep-olive/20 bg-white px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-deep-olive dark:border-terracotta/25 dark:bg-background"
              />
            </div>

            {/* Total Copies */}
            {/* <div>
              <label className="mb-1.5 block text-xs font-semibold text-foreground">
                Total Copies
              </label>
              <input
                type="number"
                min="1"
                defaultValue={book.TotalCopies}
                className="w-full rounded-xl border border-deep-olive/20 bg-white px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-deep-olive dark:border-terracotta/25 dark:bg-background"
              />
            </div> */}
          </div>

          {/* Available Copies */}
          {/* <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">
              Available Copies
            </label>
            <input
              type="number"
              min="0"
              max={book.TotalCopies}
              defaultValue={book.AvailableCopies}
              className="w-full rounded-xl border border-deep-olive/20 bg-white px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-deep-olive dark:border-terracotta/25 dark:bg-background"
            />
          </div> */}

          {/* Cover Image URL */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">
              Cover Image URL
            </label>

            <input
              name="image"
              type="url"
              defaultValue={book.Image}
              placeholder="https://example.com/book-cover.jpg"
              className="w-full rounded-xl border border-deep-olive/20 bg-white px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-deep-olive dark:border-terracotta/25 dark:bg-background"
            />
          </div>

          {/* Cover Image File */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">
              Upload Cover Image
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-deep-olive/30 bg-deep-olive/5 p-3 transition hover:bg-deep-olive/10 dark:border-terracotta/30 dark:bg-terracotta/5 dark:hover:bg-terracotta/10">
              <div className="rounded-lg bg-deep-olive/10 p-2 dark:bg-terracotta/15">
                <ImagePlus
                  size={20}
                  className="text-deep-olive dark:text-terracotta"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground">
                  Choose a book cover file
                </p>
                <p className="text-[10px] text-muted-foreground">
                  JPG, PNG or WEBP
                </p>
              </div>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setSelectedImage(file);
                  }
                }}
              />
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">
              Description
            </label>

            <textarea
              name="description"
              defaultValue={book.Description}
              rows={3}
              placeholder="Write a short description..."
              className="w-full resize-none rounded-xl border border-deep-olive/20 bg-white px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-deep-olive dark:border-terracotta/25 dark:bg-background"
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-3 border-t border-deep-olive/15 pt-4 dark:border-terracotta/20">
            <button
              type="button"
              onClick={() => setShowEdit(false)}
              className="rounded-xl border border-deep-olive/25 px-4 py-2.5 text-xs font-semibold text-muted-foreground transition hover:bg-deep-olive/10 dark:border-terracotta/25 dark:hover:bg-terracotta/10"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center gap-2 rounded-xl bg-deep-olive px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#6F7658] dark:bg-terracotta/80 dark:hover:bg-terracotta"
            >
              <Save size={15} />
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookForm;
