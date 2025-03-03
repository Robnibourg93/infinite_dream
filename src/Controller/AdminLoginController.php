<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

class AdminLoginController extends AbstractController
{
    #[Route('/admin', name: 'Login')]
    public function index(): Response
    {
        return $this->render('admin/login.html.twig', []);
    }
}