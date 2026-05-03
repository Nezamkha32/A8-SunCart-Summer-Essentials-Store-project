"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    window.location.reload();
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button
        variant="secondary"
        className="mt-4 flex items-center gap-2"
      >
        <BiEdit size={18} />
        Update Profile
      </Button>

      {/* Modal */}
      <Modal.Backdrop>
        <Modal.Container placement="center">

          <Modal.Dialog className="sm:max-w-md rounded-2xl shadow-xl">

            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="flex items-center gap-3">

              <Modal.Icon className="bg-blue-100 text-blue-600">
                <BiUser className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-lg font-semibold">
                Update Your Profile
              </Modal.Heading>

            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">

              <Surface variant="default" className="p-4 rounded-xl">

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  {/* Name */}
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  {/* Image */}
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="https://your-image.com/photo.jpg" />
                  </TextField>

                  {/* Footer Buttons */}
                  <Modal.Footer className="flex justify-end gap-2 pt-4">

                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" slot="close">
                      Save Changes
                    </Button>

                  </Modal.Footer>

                </form>

              </Surface>

            </Modal.Body>

          </Modal.Dialog>

        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}